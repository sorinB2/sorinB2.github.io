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
	color: ${COLORS.DARG_GRAY};
`;

export const StyledCharacterDetails = styled.div`
	display: grid;
	grid-template-columns: 250px auto;
	grid-gap: 25px;
	margin: 0 16px;
`;

export const DetailsWrapper = styled.div`
	margin: 0 16px;
`;
