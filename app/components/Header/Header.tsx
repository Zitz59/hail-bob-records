'use client'

import styles from "./Header.module.scss"
import Image from "next/image"
import {ForwardedRef, forwardRef, useState} from "react"
import Navbar from "@/app/components/NavBar/Navbar";

type PropsType = {
	handleOpen: () => void
}

export const Header = forwardRef<HTMLDivElement, PropsType>(
	({handleOpen}, ref: ForwardedRef<HTMLDivElement>) => {
		const [open, setOpen] = useState(false)

		const onClickHandler = () => {
			setOpen(prev => !prev)
			handleOpen()
		}

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
					onClick={onClickHandler}
				/>
			</div>
		)
	}
)
Header.displayName = 'Header'


