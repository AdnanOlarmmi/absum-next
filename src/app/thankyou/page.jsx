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
							<p>
								Please refrain from placing a duplicate order; instead, await a
								call from us within the next few hours. Ensure your phone number
								is accessible and keep your phone nearby to promptly receive our
								call, expediting the delivery process. AbsumHub will contact you
								to confirm your order before proceeding.
							</p>
							<h2>HAVE ANY QUESTIONS? CONTACT US VIA CALL OR WHATSAPP. 09033931919</h2>
							
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
