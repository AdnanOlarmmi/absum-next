"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Main from './components/Main';

export default function Home() {
	return (
		<>
			<Nav />
			<Slider />
			<Main />
		</>
	);
}

