export default function Episode({ episode }) {
	return (
		<div className='episode'>
			<p className='episode-name'>{episode.name}</p>
			<p className='episode-number'>{episode.episode}</p>
			<p className='episode-date'>{episode.air_date}</p>
		</div>
	);
}
