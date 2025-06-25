import * as React from 'react';
import styles from './Footer.module.scss';
import SuperInputText from "@/app/components/SuperInputText/SuperInputText";
import SocialLinks from "@/app/components/SocialLinks/SocialLinks";


type Props = {

};
export const Footer = (props: Props) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContentTop}>
				<div className={styles.footerBlockNewsLetter}>
					<form className={styles.footerNewsletterForm} action="">
						<h2 className={styles.footerBlockHeading}>Subscribe to our emails</h2>
						<div className={styles.formInput}>
							<SuperInputText/>
							<SocialLinks />
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};