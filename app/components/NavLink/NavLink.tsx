"use client"
import styles from './NavLink.module.scss'
import {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

type LinkType = {
	href: string,
	id?: string,
	children: ReactNode,
	onClick?: () => void,
	external?: boolean;
}
export default function NavLink({href, id, children, onClick,external = false}: LinkType) {
	const pathName = usePathname()
	const isActive = pathName === href
	const linkClassName = isActive ? `${styles.navLink } ${styles.active}`  : styles.navLink

	if(external){
		return(
			<a
				href={href}
				id={id}
				onClick={onClick}
				className={linkClassName}
				target='_blank'
				rel='noopener noreferrer'
			>
				{children}
			</a>
		)
	}
	return (
		<Link
			className={linkClassName}
			href={href}
			id={id}
			onClick={onClick}
		>
			{children}
		</Link>
	)
}