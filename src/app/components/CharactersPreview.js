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
		if (currentPageInfo.next) {
			getCharacters(currentPageInfo.next);
		} else {
			alert('You reached the end!');
		}
	};

	useEffect(() => {
		getCharacters('https://rickandmortyapi.com/api/character');
	}, []);

	if (characters.length === 0) {
		return <p className='loading'>Loading...</p>;
	}

	return (
		<section className='characters'>
			{characters && (
				<>
					{characters.map((character) => {
						return (
							<CharacterPreview key={character.id} character={character} />
						);
					})}
					<button
						className='btn-black btn-load-more'
						onClick={loadMoreCharacters}
					>
						Load more
					</button>
				</>
			)}
		</section>
	);
}
