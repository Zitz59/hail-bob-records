import styles from './SocialLinks.module.scss'
import Link from "next/link";
import Image from "next/image";

export default function SocialLinks() {
	return (
		<div className={styles.socials}>
			<Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
				<Image src="/icons/icons8-instagram.svg" alt="Instagram" width={44} height={44} />
			</Link>
			<Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
				<Image src="/icons/icons8-twitter.svg" alt="Twitter" width={40} height={40} />
			</Link>
		</div>
	)
}