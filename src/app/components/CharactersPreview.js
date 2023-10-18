'use client';

import { useEffect, useState } from 'react';
import CharacterPreview from './CharacterPreview';

export default function CharactersPreview() {
	const [currentPageInfo, setCurrentPageInfo] = useState(null);
	const [characters, setCharacters] = useState([]);

	const getCharacters = async (url) => {
		const res = await fetch(url);

		const data = await res.json();

		setCurrentPageInfo(data.info);
		setCharacters([...characters, ...data.results]);
	};

	const loadMoreCharacters = () => {
		getCharacters(currentPageInfo.next);
	};

	useEffect(() => {
		getCharacters('https://rickandmortyapi.com/api/character');
	}, []);

	return (
		<section className='characters'>
			{characters &&
				characters.map((character) => {
					return <CharacterPreview key={character.id} character={character} />;
				})}
			<button onClick={loadMoreCharacters}>Load more</button>
		</section>
	);
}
