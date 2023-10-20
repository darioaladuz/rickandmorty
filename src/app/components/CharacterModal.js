import Image from 'next/image';

export default function CharacterModal({ closeModal, character }) {
	return (
		<div className='character-modal'>
			<div className='character-modal-header'>
				<button onClick={closeModal} className='character-modal-close'>
					&#10005; Close
				</button>
			</div>
			<div className='character-modal-image'>
				<Image
					className='character-modal-image'
					src={character.image}
					width='300'
					height='300'
					priority
					alt={character.name}
				/>
			</div>
			<div className='character-modal-details'>
				<p>Name: {character.name}</p>
				<p>Species: {character.species}</p>
				<p>Location: {character.location.name}</p>
				<p>Gender: {character.gender}</p>
				<p>Status: {character.status}</p>
				<div className='episodes'></div>
			</div>
		</div>
	);
}
