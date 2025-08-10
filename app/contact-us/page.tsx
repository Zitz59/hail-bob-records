import styles from '../../styles/pages.module.scss'
export default function Page () {
	return (
		<div className={styles.contactUsBlock}>
			<h1>Contact Us</h1>
			<p>Started in 2020, Hail Bob Records, is a record label based out of Belgrade, Serbia.</p>
			<p>For any questions please contact hailbobrebirth@gmail.com</p>
			<p><a className={styles.link} href="https://en.wikipedia.org/wiki/hailBobRecords" target='_blank' rel='noopener noreferrer'>Wikipedia</a></p>
			<p><a className={styles.link} href="https://soundcloud.com/hailBobRecords" target='_blank' rel='noopener noreferrer'>Soundcloud</a></p>
			<p><a className={styles.link} href="https://www.discogs.com/label/2582170-Hail-Bob-Records" target='_blank' rel='noopener noreferrer'>Discogs</a></p>
		</div>
	)
}
