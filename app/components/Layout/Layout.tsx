"use client"
import React, {ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Header} from "@/app/components/Header/Header";
import {Footer} from "@/app/components/Footer/Footer";
import styles from "./Layout.module.scss"
import RadioPlayer from "@/app/components/RadioPlayer/RadioPlayer";

//TODO:1)сделать так чтобы во вкладке браузера был логотип
//TODO:2)сделать так чтобы на всех ссылках кратинкой был логотип

type PropsType = {
	children: ReactNode
}

export default function Layout({children}: PropsType) {
	const headerRef = useRef<HTMLDivElement | null>(null)
	const [headerHeight, setHeaderHeight] = useState(0)
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)

	useEffect(() => {
		open && (document.body.style.overflow = 'hidden')
		!open && (document.body.style.overflow = 'unset')
	}, [open]) // отключает прокрутку при открытом меню

	useLayoutEffect(() => {
		if (headerRef.current) {
			const height = headerRef.current.offsetHeight
			setHeaderHeight(height)
		}

		const handleResize = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current.offsetHeight)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<div className={styles.pageWrapper}>
				<Header handleOpen={handleOpen} open={open} ref={headerRef}/>
				<div className={styles.content}>
					<Sidebar open={open} action={handleClose}/>
					<main style={{marginTop: headerHeight}}
						  className={`${styles.main} mx-auto w-full max-w-screen-xl px-4 xs:px-5 md:px-6`}>
						{/*страницы*/}
						{children}
					</main>
				</div>
				<Footer/>
				<RadioPlayer/>
			</div>
		</>
	)
}