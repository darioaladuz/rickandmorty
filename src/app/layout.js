import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Rick & Morty | Lista de personajes',
	description:
		'Una lista de todos los personajes de Rick y Morty junto a un buscador con varios filtros.'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
