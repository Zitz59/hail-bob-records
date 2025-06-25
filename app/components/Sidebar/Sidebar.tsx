"use client"
import {FC, useEffect, useState} from "react";
import s from './Sidebar.module.scss'
import closeIcon from './close_icon.svg'
import Image from "next/image";
import NavLink from "@/app/components/NavLink/NavLink";
import {navLinks} from "@/app/constants/navLinks";


//TODO: чекнуть вариант адаптивности с помощью готового хука useMediaQuery

type PropsType = {
	open: boolean
	handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
	const [shouldRender, setShouldRender] = useState(open)
	const [closing, setClosing] = useState(false)
	const [isMobile,setIsMobile] = useState(true)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 920)
		}

		handleResize()
		window.addEventListener('resize',handleResize)

		return ()=> window.removeEventListener('resize',handleResize)
	}, []);

	useEffect(() => {
		if (open) {
			setShouldRender(true)
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollbarWidth}px`;

			requestAnimationFrame(() => {
				document.body.classList.add('sidebar-mounted')
			})
		} else {
			setClosing(true)
			setTimeout(() => {
				setShouldRender(false)
				setClosing(false)
				document.body.style.overflow = '';
				document.body.style.paddingRight = '';
			}, 500)

		}
	}, [open]);

	if (!isMobile || !shouldRender)   return null

	const sidebarClass = [
		s.sidebar,
		document.body.classList.contains('sidebar-mounted') ? s.open : '',
		closing ? s.closing : ''
	].join(' ')

	const closeClass = `${s.close} ${closing ? s.spin : ''}`
	return (
		<>
			{/*затемнение справа от открытого меню*/}
			{open && <div className={s.background} onClick={handleClose}/>}

			<aside className={sidebarClass}>
				<button className={closeClass} onClick={handleClose}>
					<Image
						src={closeIcon}
						alt="close sidebar"
						id={'sidebar-menu-close'}
					/>
				</button>

				<nav id={'sidebar-menu'} className={s.nav}>
					{navLinks.map(({id, label, href}) => (
						<NavLink
							key={id}
							id={id}
							href={href}
							onClick={handleClose}
						>{label}</NavLink>
					))}
				</nav>
			</aside>
		</>
	)
}