import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledCard = styled.div`
	width: 250px;
	height: auto;
	max-height: 525px;
	padding-bottom: 20px;
	box-shadow: 0.5px 3px 3px 3px rgba(0, 0, 0, 0.15);
	background-color: ${COLORS.WHITE};
	border-radius: 10px;
	overflow: hidden;
	position: sticky;
	top: 20px;
	color: ${COLORS.DARK_GRAY};
	@media (max-width: 700px) {
		display: grid;
		grid-template-columns: 250px auto;
		height: 250px;
		width: auto;
		padding-bottom: 0;
	}
	@media (max-width: 610px) {
		grid-template-columns: 1fr;
		width: 300px;
		height: auto;
		padding-bottom: 20px;
		justify-self: center;
	}
`;

export const StyledCharacterDetails = styled.div`
	display: grid;
	grid-template-columns: 250px auto;
	grid-gap: 25px;
	margin: 0 16px;
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export const CharacterCardWrapper = styled.div`
	@media (max-width: 610px) {
		display: grid;
		justify-content: center;
	}
`;

export const DetailsWrapper = styled.div`
	margin: 0 16px;
`;

export const BackButton = styled.div`
	margin: 16px 0;
	height: 33px;
	font-size: 16px;
	font-weight: 600;
	box-sizing: border-box;
	border-radius: 5px;
	color: ${COLORS.WHITE};
	background-color: ${COLORS.DARK_BLUE};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
	}
`;
