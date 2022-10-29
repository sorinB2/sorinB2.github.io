import {
	CharacterCard,
	CharacterDetails,
	CharacterImage,
	CharacterInformation,
	CharacterName,
	CharacterStatus,
	CharacterText
} from './CharacterStyledComponents';

const Character = () => {
	return (
		<CharacterCard>
			<CharacterImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
			<div>
				<CharacterName>Shrek the musical fan</CharacterName>
				<CharacterInformation>
					<CharacterStatus bg="red" />
					<CharacterText>Dead - Human</CharacterText>
				</CharacterInformation>
				<CharacterDetails>
					<span>Origin</span>
					<CharacterText>Earth (Replacement Dimension)</CharacterText>
				</CharacterDetails>
			</div>
		</CharacterCard>
	);
};

export default Character;
