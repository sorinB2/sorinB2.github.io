// Components
import {
	CharacterDetails,
	CharacterImage,
	CharacterInformation,
	CharacterName,
	CharacterStatus,
	CharacterText
} from '../Character/StyledComponents';
import { DetailsWrapper, StyledCard } from './StyledComponents';

// Other resources
import { STRINGS } from '../../constants/strings';

const CharacterCard = (props: CharacterCardProps) => {
	const { name, image, status, species, gender, origin, location } = props;
	return (
		<StyledCard>
			<CharacterImage src={image} height="250px" width="250px" />
			<DetailsWrapper>
				<CharacterName>{name}</CharacterName>
				<CharacterInformation>
					<CharacterStatus bg={status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'} />
					<CharacterText>{`${status} - ${species} - ${gender}`}</CharacterText>
				</CharacterInformation>
				<CharacterDetails>
					<span>{STRINGS.ORIGIN}</span>
					<CharacterText>{origin.name}</CharacterText>
				</CharacterDetails>
				<CharacterDetails>
					<span>{STRINGS.LOCATION}</span>
					<CharacterText>{location.name}</CharacterText>
				</CharacterDetails>
			</DetailsWrapper>
		</StyledCard>
	);
};

export default CharacterCard;

interface CharacterCardProps {
	name: string;
	image: string;
	status: string;
	species: string;
	gender: string;
	origin: {
		name: string;
	};
	location: {
		name: string;
	};
}
