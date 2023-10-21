export default function Episode({ episode }) {
	return (
		<div className='episode'>
			<p className='episode-name'>
				<strong>{episode.name}</strong>
			</p>
			<div className='episode-footer'>
				<p className='episode-number'>{episode.episode}</p>
				<p className='episode-date'>{episode.air_date}</p>
			</div>
		</div>
	);
}
