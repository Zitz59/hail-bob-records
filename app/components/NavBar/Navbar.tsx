import styles from "./Navbar.module.scss"
import {navLinks} from "@/app/constants/navLinks";
import NavLink from "@/app/components/NavLink/NavLink";


export default function Navbar() {

	return (
		<nav className={styles.navbar}>
					{
						navLinks.map((link,index) => (
								<NavLink key={link.href} id={link.id} href={link.href} external={link.external}>{link.label}</NavLink>
						))
					}
		</nav>
	)
}