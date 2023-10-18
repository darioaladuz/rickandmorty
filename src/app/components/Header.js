import Image from 'next/image';

export default function Header() {
	return (
		<header>
			<Image
				width='300'
				height='100'
				alt='Rick and Morty'
				src='/rickandmorty.svg'
			/>
		</header>
	);
}
