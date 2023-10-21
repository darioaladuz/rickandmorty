import Image from 'next/image';
import Episodes from './Episodes';
import { useState } from 'react';

export default function CharacterModal({ closeModal, character }) {
	const [currentTab, setCurrentTab] = useState('episodes');

	{
		/* Tabs for the modal */
	}
	const tabs = {
		details: (
			<>
				<p>Name: {character.name}</p>
				<p>Species: {character.species}</p>
				<p>Location: {character.location.name}</p>
				<p>Gender: {character.gender}</p>
				<p>Status: {character.status}</p>
			</>
		),
		episodes: <Episodes episodes={character.episode} />
	};

	const NavBtn = ({ title }) => {
		return (
			<button
				onClick={() => setCurrentTab(title)}
				className={`character-modal-nav-btn${
					title === currentTab ? ' active' : ''
				}`}
			>
				{title}
			</button>
		);
	};

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
			<div className='character-modal-nav'>
				{/* Dynamically get nav buttons from the 'tabs' object */}
				{Object.keys(tabs).map((navBtn) => {
					return <NavBtn key={navBtn} title={navBtn} />;
				})}
			</div>
			<div className='character-modal-details'>
				<div className='character-modal-tab'>{tabs[currentTab]}</div>
			</div>
		</div>
	);
}
