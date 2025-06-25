'use client'

import styles from "./Header.module.scss"
import Image from "next/image"
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
                    <Image src="/logo/label_logo.jpg"  alt="logo" width={100} height={100} style={{objectFit:"cover",borderRadius:"8px"}} />
                </div>
                <div className={styles.navWrapper}>
                    <Navbar />
                </div>
                <Image
                    width={160}
                    height={160}
                    src="/icons/burgerIconMenu.svg"
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


