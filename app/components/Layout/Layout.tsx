"use client"
import React, {ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Header} from "@/app/components/Header/Header";
import {Footer} from "@/app/components/Footer/Footer";


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
			<Sidebar open={open} handleClose={handleClose}/>
			<Header handleOpen={handleOpen} ref={headerRef}/>

			<main style={{marginTop: headerHeight}}>
				{/*страницы*/}
				{children}
			</main>
			<Footer />
		</>
	)
}