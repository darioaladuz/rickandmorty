import { useEffect, useState } from 'react';
import Episode from './Episode';

function extractEpisodeNumbers(episodeUrls) {
	const episodeNumbers = episodeUrls.map((url) => {
		// Use a regular expression to extract the episode number from the URL
		const matches = url.match(/\/episode\/(\d+)/);
		if (matches && matches.length > 1) {
			return parseInt(matches[1]);
		}
		return null; // Return null for invalid URLs
	});

	// Filter out null values (invalid URLs) and sort the episode numbers
	return episodeNumbers
		.filter((number) => number !== null)
		.sort((a, b) => a - b);
}

export default function Episodes({ episodes }) {
	const [episodesData, setEpisodesData] = useState([]);

	useEffect(() => {
		const episodeNumbers = extractEpisodeNumbers(episodes).join(',');

		const getEpisodes = async (url) => {
			const res = await fetch(url);

			const data = await res.json();

			console.log({ data });

			setEpisodesData(data);
		};

		const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeNumbers}`;

		getEpisodes(episodesUrl);
	}, []);

	return (
		<div className='episodes'>
			{episodesData.map((episode) => (
				<Episode key={episode.id} episode={episode} />
			))}
		</div>
	);
}
