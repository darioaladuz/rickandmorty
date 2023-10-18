import Image from 'next/image';

export default function CharacterPreview({ character }) {
	return (
		<article className='character'>
			<Image
				className='character-image'
				src={character.image}
				layout={'fill'}
				objectFit='cover'
				alt={character.name}
			/>
			<div className='character-details'>
				<h2 className='character-name'>{character.name}</h2>
				{character.type && (
					<span className='character-type'>{character.type}</span>
				)}
				<span className='character-species'>{character.species}</span>
				<span className='character-location'>{character.location.name}</span>
			</div>
		</article>
	);
}
