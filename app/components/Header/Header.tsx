'use client'

import styles from "./Header.module.scss"
import Image from "next/image"
import {ForwardedRef, forwardRef} from "react"
import Navbar from "@/app/components/NavBar/Navbar";

type PropsType = {
	handleOpen: () => void
	open: boolean
}

export const Header = forwardRef<HTMLDivElement, PropsType>(
	({handleOpen,open}, ref: ForwardedRef<HTMLDivElement>) => {

		return (
			<div ref={ref} className={styles.header}>
				<div className={styles.logoContainer}>
					<img src="/logo/label_logo.jpg" alt="logo" width={100} height={100}
						 style={{objectFit: "cover", borderRadius: "8px"}}/>
				</div>
				<div className={styles.navWrapper}>
					<Navbar/>
				</div>
				<Image
					width={40}
					height={40}
					src="/icons/hamburgerMenu.png"
					unoptimized
					id="burger-menu"
					alt="open-menu"
					className={`${styles.burgerMenuIcon} ${open ? styles.open : ''}`}
					onClick={handleOpen}
				/>
			</div>
		)
	}
)
Header.displayName = 'Header'


