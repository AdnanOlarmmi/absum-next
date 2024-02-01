'use client';
import { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import flash from '../../../public/assets/images/flash-sale.png';
import check from '../../../public/assets/images/check.png';
import down from '../../../public/assets/images/dow.webp';
import juli from '../../../public/assets/images/juli.jpeg';
import shred from '../../../public/assets/images/shred.jpeg';
import slicer from '../../../public/assets/images/slicer.jpeg';
import Image from 'next/image';

const peculiarities = [
	{
		title: '3-in-1 Multifunctional Vegetable Cutter',
		description:
			'Equipped with 1 slicing cutter blade, 1 shredding blade, and 1 grinding blade, satisfying your various cooking needs.',
	},
	{
		title: '40% Larger Feeder Chute',
		description:
			'Can accommodate ingredients of larger size, perfect for cutting cucumbers, carrots, potatoes, onions, cheese, peanut, almonds, and more for making delicious salads, soups, pizzas, desserts, etc.',
	},
	{
		title: 'Efficient Cutting',
		description:
			'Sharp rotary 304 stainless steel cutter blades with three-dimensional drum cutting surface and improved handle, making cutting 20 times faster than other cheese shredders. ',
	},
	{
		title: '40% Larger Feeder Chute',
		description:
			'Non-contact design, large calibre, no worry of causing injury to hands, a great assistant for cooking, just enjoy your wonderful time in kitchen.',
	},
	{
		title: 'High Quality Material',
		description:
			'Made from premium ABS, PET, PP, and 304 stainless steel, environmental friendly and tasteless, secure for use, strong and sturdy enough for long-time service.',
	},
];
const keyFeature = [
	'✅ User-friendly and safe operation',
	'✅ Electricity-free design',
	'✅ Effortless cleaning, reducing dinner preparation time with three interchangeable blades',
	'✅ Vegetable cutter functionality',
	'✅ Versatile Vegetable Cutter and Slicer',
	'✅ Slicing blade designed for vegetables and fruits',
];

const moreInfo = [
	{
		title:
			'Easier Disassembly and Cleaning: Assembly and disassembly are a breeze, involving just four simple steps. Refer to the video or images for a detailed guide.',
		img: shred,
	},
	{
		title:
			'After use, immerse the blades and machine in clean water. Simply rinse them and utilize the cleaning brush to ensure no residue remains.',
		img: juli,
	},
	{
		title:
			'The coarse shredding blade efficiently shreds vegetables, perfect for crafting vegetable noodles. Its swift and straightforward operation minimizes your dinner preparation time significantly.',
		img: slicer,
	},
];

export default function Main() {
	const Ref = useRef(null);

	const [formEl, setFormEl] = useState({
		name: '',
		phoneNumber: '',
		altPhoneNumber: '',
		state: '',
		address: '',
		quantity: 'One for ₦17,999.99',
	});
	// The state for our timer
	const [timer, setTimer] = useState('00d : 02h : 10m : 00s');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			days,
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				`${days > 9 ? days : '0' + days}d :
                ${hours > 9 ? hours : '0' + hours}h : ${
					minutes > 9 ? minutes : '0' + minutes
				}m : ${seconds > 9 ? seconds : '0' + seconds}s`
			);
		}
	};

	const clearTimer = (e) => {
		setTimer('00d : 02h : 10m : 00s');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 60 * 60 * 2 + 60 * 10);
		return deadline;
	};

	useEffect(() => {
		clearTimer(getDeadTime());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const onClickReset = () => {
	// 	clearTimer(getDeadTime());
	// };
	const handleFormChange = (e) => {
		setFormEl({
			...formEl,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='flex-column-center'>
			<AnchorLink href='/form'>
				<button>ORDER NOW</button>
			</AnchorLink>
			<p className='demo-instruction'>Grinder's peculiarities</p>
			<div className='flex-column gap-1'>
				{peculiarities.map((peculiarity, i) => (
					<div className='flex-row-center demo-info' key={i}>
						<Image width={30} height={30} src={check} alt='check mark' />
						<span>
							<span>{peculiarity.title}: &nbsp;</span>
							{peculiarity.description}
						</span>
					</div>
				))}
			</div>
			<div className='flex-column-center'>
				<p className='demo-instruction'>Key Features: </p>
				<ul>
					{keyFeature.map((feature, i) => (
						<li key={i}>{feature}</li>
					))}
				</ul>
			</div>
			<div className='gap-4 more-info margin-center'>
				{moreInfo.map((info, i) => (
					<div>
						<div className='more-info-img margin-center'>
							<Image src={info.img} />
						</div>
						<p className='text-center'>{info.title}</p>
					</div>
				))}
			</div>
			<p className='demo-instruction'>Watch the video demo below</p>
			<Image
				width={70}
				height={70}
				alt='arrow down'
				src={down}
				unoptimized={true}
			/>
			<iframe
				className='demo-video'
				src='https://www.youtube.com/embed/zv6h_mVesYw?si=7HnvZPnKICjzg3Nr'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			></iframe>

			<div className='price-container'>
				<div className='price-title flex-row flex-between'>
					<span className='price-flash flex-row'>
						<Image width={25} height={25} src={flash} alt='flash sales' />
						<span>Flash Sales</span>
					</span>
					<span>
						Time Left:
						<br />
						<span className='time-left'> {timer}</span>
					</span>
				</div>
				<div className='price-details flex-row'>
					<p className='new-price'>₦17999.99</p>
					<p className='old-price'>₦22999.99</p>
					<p className='cut-percentage'>
						-{Math.round((22999.99 - 17999.99) / 100)}%
					</p>
				</div>
				<div className='items-left flex-row'>
					<span>10 items left</span> <div className='item-meter'></div>
				</div>
			</div>
			<div className='form'>
				<div className='form-title'>Please Fill the form below to order</div>
				<Image
					className='margin-center block'
					width={70}
					height={70}
					alt='arrow down'
					src={down}
					unoptimized={true}
				/>
				<form
					id='form'
					action='https://formsubmit.co/absumhub@gmail.com'
					method='post'
					className='flex-column'
				>
					<div>
						<label for='quantity'>Quantity</label>
						<select
							id='quantity'
							class='form-select'
							aria-label='Default select example'
							onChange={(e) => handleFormChange(e)}
							name="quantity"
							required
						>
							<option selected value='One for ₦17,999.99'>One for ₦17,999.99</option>
							<option value='Two for ₦34,999.99' >Two for ₦34,999.99</option>
						</select>
					</div>

					<div class='form-group'>
						<label for='name'>
							Name <span>*</span>
						</label>
						<input
							type='text'
							name='name'
							required
							class='form-control'
							id='name'
							placeholder='Full Name'
							onChange={(e) => handleFormChange(e)}
							value={formEl.name}
						/>
					</div>
					<div class='form-group'>
						<label for='phoneNumber'>
							Phone Number <span>*</span>
						</label>
						<input
							type='text'
							name='phoneNumber'
							required
							class='form-control'
							id='phoneNumber'
							placeholder='Phone Number'
							onChange={(e) => handleFormChange(e)}
							value={formEl.phoneNumber}
						/>
					</div>
					<div class='form-group'>
						<label for='altPhoneNumber'>
							Alternate Phone Number <span>*</span>
						</label>
						<input
							type='text'
							name='altPhoneNumber'
							required
							class='form-control'
							id='altPhoneNumber'
							placeholder='Alternate Phone Number'
							onChange={(e) => handleFormChange(e)}
							value={formEl.altPhoneNumber}
						/>
					</div>
					<div class='form-group'>
						<label for='state'>
							State <span>*</span>
						</label>
						<input
							type='text'
							name='state'
							required
							class='form-control'
							id='state'
							placeholder='What state would like to receive it'
							onChange={(e) => handleFormChange(e)}
							value={formEl.state}
						/>
					</div>
					<div class='form-group'>
						<label for='altPhoneNumber'>
							Full Delivery Address <span>*</span>
						</label>
						<textarea
							rows={4}
							type='text'
							name='address'
							required
							class='form-control'
							id='address'
							placeholder='Full Address of your location'
							onChange={(e) => handleFormChange(e)}
							value={formEl.address}
						/>
					</div>
					<input type='hidden' name='_captcha' value='false'></input>
					<input
						type='hidden'
						name='_subject'
						value='3-in-1 MULTIFUNCTIONAL VEGETABLE CUTTER NEW ORDER'
					/>
					<input
						type='hidden'
						name='_next'
						value='https://deluxe-druid-527391.netlify.app/thankyou'
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
			<footer>
				CopyRight &copy; {new Date().getFullYear()}. All Right Reserved
			</footer>
		</div>
	);
}
