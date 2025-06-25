'use client'

import styles from "./Header.module.scss"
import logo from "../../../public/logo/label_logo.jpg"
import Image from "next/image"
import burgerIcon from "./burgerIconMenu.svg"
import {ForwardedRef, forwardRef} from "react"
import Navbar from "@/app/components/NavBar/Navbar";

type PropsType = {
    handleOpen: () => void
}

export const Header = forwardRef<HTMLDivElement, PropsType>(
    ({ handleOpen }, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div ref={ref} className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image src={logo}  alt="logo" width={100} height={100} style={{objectFit:"cover",borderRadius:"8px"}} />
                </div>
                <div className={styles.navWrapper}>
                    <Navbar />
                </div>
                <Image
                    src={burgerIcon}
                    id="burger-menu"
                    alt="open-menu"
                    className={styles.burgerMenuIcon}
                    onClick={handleOpen}
                />
            </div>
        )
    }
)
Header.displayName = 'Header'


