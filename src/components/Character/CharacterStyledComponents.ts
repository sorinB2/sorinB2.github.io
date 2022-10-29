import styled from 'styled-components';

interface CharacterStatusProps {
	bg: string;
}

export const CharacterCard = styled.div`
	width: 550px;
	height: 200px;
	border-radius: 5px;
	box-shadow: 0.5px 3px 3px 3px rgba(0, 0, 0, 0.15);
	display: grid;
	grid-template-columns: 200px auto;
	grid-gap: 15px;
	overflow: hidden;
	color: #212529;
	margin: 16px;
`;

export const CharacterImage = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	overflow: hidden;
`;

export const CharacterName = styled.div`
	font-size: 28px;
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
