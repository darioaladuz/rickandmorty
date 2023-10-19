import Image from 'next/image';
import { useState } from 'react';

export default function CharacterPreview({ character }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<article className='character'>
			<Image
				className='character-image'
				src={character.image}
				width='300'
				height='300'
				priority
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
			<div className='btn-details-wrapper'>
				<button onClick={() => setShowModal(true)} className='btn-black'>
					More details
				</button>
			</div>

			{showModal && (
				<div className='character-modal'>
					<p>{character.name}</p>
				</div>
			)}
		</article>
	);
}
