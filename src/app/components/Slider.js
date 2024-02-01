'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../../public/assets/images/1.jpeg';
import img2 from '../../../public/assets/images/2.jpeg';
import img3 from '../../../public/assets/images/3.jpeg';
import img4 from '../../../public/assets/images/4.jpeg';
import img5 from '../../../public/assets/images/5.jpeg';
import img6 from '../../../public/assets/images/6.jpeg';
import img7 from '../../../public/assets/images/7.jpeg';
import img8 from '../../../public/assets/images/8.jpeg';
import img9 from '../../../public/assets/images/9.jpeg';
import img10 from '../../../public/assets/images/10.jpeg';
import { useEffect } from 'react';
// import img11 from '../assets/images/11.jpeg';
// import img12 from '../assets/images/12.jpeg';
// import img13 from '../assets/images/13.jpeg';
// import img14 from '../assets/images/14.jpeg';
// import img15 from '../assets/images/15.jpeg';
// import img16 from '../assets/images/16.jpeg';
// import img17 from '../assets/images/17.jpeg';
// import img18 from '../assets/images/18.jpeg';
// import img19 from '../assets/images/19.jpeg';
// import img20 from '../assets/images/20.jpeg';
// import img21 from '../assets/images/21.jpeg';
// import img22 from '../assets/images/22.jpeg';
// import img23 from '../assets/images/23.jpeg';
// import img24 from '../assets/images/24.jpeg';
// import img25 from '../assets/images/25.jpeg';
// import img26 from '../assets/images/26.jpeg';

const imagesArr = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	// img11,
	// img12,
	// img13,
	// img14,
	// img15,
	// img16,
	// img17,
	// img18,
	// img19,
	// img20,
	// img21,
	// img22,
	// img23,
	// img24,
	// img25,
	// img26,
];


export default function Slider({ width }) {
	return (
		<div>
			<p className='hero-title'>3-in-1 MULTIFUNCTIONAL VEGETABLE CUTTER</p>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				slidesPerView={width < 1000 ? 1 : 3}
				spaceBetween={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 1500 }}
				loop
			>
				{imagesArr.map((img, i) => (
					<SwiperSlide key={i}>
						<div className='slider-img-container'>
							<Image src={img} alt='img' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
