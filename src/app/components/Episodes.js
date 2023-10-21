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
	console.log({ episodes });
	console.log({ numbers: extractEpisodeNumbers(episodes) });

	return <div className='episodes'></div>;
}
