'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Main from './components/Main';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const width = global?.window && window.innerWidth;
export default function Home() {
	return (
		<>
			<Nav />
			<Slider width={width} />
			<Main />
			<FloatingWhatsApp phoneNumber='2349033931919' accountName='Absum Hub' avatar='https://www.w3schools.com/howto/img_avatar.png' />
		</>
	);
}

