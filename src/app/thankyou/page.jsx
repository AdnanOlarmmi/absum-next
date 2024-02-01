'use client';
import Image from 'next/image';
import thankYou from '../../../public/assets/images/thankyou.png';

export default function ThankYou() {
    return (
		<section class='login-main-wrapper'>
			<div class='main-container'>
				<div class='login-process'>
					<div class='login-main-container'>
						<div class='thankyou-wrapper'>
							<h1>
								<Image src={thankYou} alt='thanks' />
							</h1>
							<p>for contacting us, we will get in touch with you soon... </p>
							<a href='/'>Back to home</a>
							<div class='clr'></div>
						</div>
						<div class='clr'></div>
					</div>
				</div>
				<div class='clr'></div>
			</div>
		</section>
    );
}