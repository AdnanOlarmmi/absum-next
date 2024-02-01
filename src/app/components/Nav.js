import logo from '../../../public/assets/images/logo.png';
import Image from 'next/image';

export default function Nav() {
	return (
		<nav>
			<Image width={50} height={50} src={logo} alt='logo' />
		</nav>
	);
}
