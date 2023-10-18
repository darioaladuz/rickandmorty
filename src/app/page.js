import Image from 'next/image';
// https://rickandmortyapi.com/api
const getCharacters = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/character');

	return res.json();
};

export default async function Home() {
	const characters = await getCharacters();

	console.log({ characters: characters.results });

	return (
		<main>
			<h1>test</h1>
		</main>
	);
}
