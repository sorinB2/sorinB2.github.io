import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledError = styled.p`
	font-size: 176px;
	margin: 0;
	font-weight: 500;
	color: ${COLORS.DARK_GRAY};
`;

export const StyledButton = styled.button`
	height: 40px;
	width: auto;
	padding: 0 24px;
	background-color: ${COLORS.DARK_BLUE};
	border: none;
	border-radius: 5px;
	color: ${COLORS.WHITE};
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
	}
`;

export const StyledNotFound = styled.div`
	min-height: calc(100vh - 142px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		font-weight: 400;
		font-size: 20px;
	}
`;
