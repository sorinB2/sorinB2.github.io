import React from 'react';

// Components
import {
	CharacterCard,
	CharacterDetails,
	CharacterImage,
	CharacterInformation,
	CharacterName,
	CharacterStatus,
	CharacterText
} from './StyledComponents';

// Other resources
import { STRINGS } from '../../constants/strings';
import { COLORS } from '../../constants/colors';

const Character = (props: CharacterProps) => {
	const { name, image, status, species, origin, id, onClick } = props;
	return (
		<CharacterCard id={id} onClick={onClick}>
			<CharacterImage src={image} height="200px" width="200px" />
			<div>
				<CharacterName>{name}</CharacterName>
				<CharacterInformation>
					<CharacterStatus
						bg={status === 'Alive' ? COLORS.GREEN : status === 'Dead' ? COLORS.RED : COLORS.GRAY}
					/>
					<CharacterText>{`${status} - ${species}`}</CharacterText>
				</CharacterInformation>
				<CharacterDetails>
					<span>{STRINGS.ORIGIN}</span>
					<CharacterText>{origin.name}</CharacterText>
				</CharacterDetails>
			</div>
		</CharacterCard>
	);
};

export default Character;

interface CharacterProps {
	name: string;
	image: string;
	status: string;
	species: string;
	id: string;
	origin: {
		name: string;
	};
	onClick: (e: React.MouseEvent) => void;
}
