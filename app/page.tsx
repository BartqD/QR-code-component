import { Fragment } from 'react'
import classes from './page.module.scss'
import Image from 'next/image'
import qrCode from '../public/images/image-qr-code.png'

export default function Home() {
	return (
		<Fragment>
			<main>
				<section className={classes.QRsection}>
					<div className={classes.card}>
						<div className={classes['card__img']}>
							<Image src={qrCode} alt='QR code' width={288} height={288}></Image>
						</div>
						<div className={classes['card__content']}>
							<h2 className={classes['card__content-title']}>Improve your front-end skills by building projects</h2>
							<p className={classes['card__content-text']}>
								Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className={classes.attribution}>
					Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a href=''>Bartosz</a>.
				</div>
			</footer>
		</Fragment>
	)
}
