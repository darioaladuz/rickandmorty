import Image from 'next/image';

export default function CharacterPreview({ character }) {
	return (
		<article className='character'>
			<Image
				className='character-image'
				src={character.image}
				width='200'
				height='200'
				alt={character.name}
			/>
			<div className='character-details'>
				<h2 className='character-name'>{character.name}</h2>
				<span className='character-type'>{character.type}</span>
				<span className='character-species'>{character.species}</span>
				<span className='character-location'>{character.location.name}</span>
			</div>
		</article>
	);
}
