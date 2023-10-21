'use client';

import { useEffect, useState } from 'react';
import CharacterPreview from './CharacterPreview';

export default function CharactersPreview() {
	const [currentPageInfo, setCurrentPageInfo] = useState(null);
	const [characters, setCharacters] = useState([]);
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);

	const getCharacters = async (url, reset = false) => {
		try {
			const res = await fetch(url);

			const data = await res.json();

			if (data.error) {
				setError(data.error);
				return;
			}

			// There are no errors?
			setError(null);

			setCurrentPageInfo(data.info);

			if (reset) {
				// Completely replace current characters shown
				setCharacters([...data.results]);
			} else {
				// Add next page to the characters list
				setCharacters([...characters, ...data.results]);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const loadMoreCharacters = () => {
		if (currentPageInfo.next) {
			// If there's more characters to load
			// Add them to the current characters list
			getCharacters(currentPageInfo.next);
		} else {
			alert('You reached the end!');
		}
	};

	useEffect(() => {
		getCharacters(
			`https://rickandmortyapi.com/api/character/?name=${query}`,
			true
		);
	}, [query]);

	return (
		<>
			<section className='search'>
				<input
					className='search-bar'
					type='search'
					placeholder='Search...'
					onChange={(e) => setQuery(e.target.value)}
				/>
			</section>
			{characters.length === 0 ? (
				<p className='no-characters'>Loading...</p>
			) : error ? (
				<p className='no-characters'>{error}</p>
			) : (
				<>
					<section className='characters'>
						{characters && (
							<>
								{characters.map((character) => {
									return (
										<CharacterPreview
											key={character.id}
											character={character}
										/>
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
				</>
			)}
		</>
	);
}
