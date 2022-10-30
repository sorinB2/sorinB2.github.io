import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

interface CharacterStatusProps {
	bg: string;
}

interface CharacterImageProps {
	height: string;
	width: string;
}

export const CharacterCard = styled.div`
	width: 550px;
	height: 200px;
	border-radius: 5px;
	box-shadow: 0.5px 3px 3px 3px rgba(0, 0, 0, 0.15);
	background-color: ${COLORS.WHITE};
	display: grid;
	grid-template-columns: 200px auto;
	grid-gap: 15px;
	overflow: hidden;
	color: ${COLORS.DARG_GRAY};
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
	}
`;

export const CharacterImage = styled.img`
	height: ${(props: CharacterImageProps) => props.height};
	width: ${(props: CharacterImageProps) => props.width};
	object-fit: cover;
	overflow: hidden;
`;

export const CharacterName = styled.div`
	font-size: 24px;
	font-weight: 700;
	margin-top: 16px;
`;

export const CharacterStatus = styled.span`
	background-color: ${(props: CharacterStatusProps) => props.bg};
	width: 8px;
	height: 8px;
	border-radius: 50%;
	display: inline-block;
`;

export const CharacterInformation = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	margin-top: 20px;
`;

export const CharacterText = styled.p`
	font-size: 18px;
	font-weight: 500;
	margin: 0;
`;

export const CharacterDetails = styled.div`
	display: grid;
	row-gap: 4px;
	margin-top: 24px;
`;
