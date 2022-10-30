import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const StyledInput = styled.input`
	outline: none;
	padding: 6px 16px;
	font-size: 16px;
	width: 400px;
	height: 40px;
	box-sizing: border-box;
	border: 1px solid ${COLORS.GRAY};
	border-radius: 5px;
	@media (max-width: 530px) {
		width: 300px;
	}
	@media (max-width: 430px) {
		width: 250px;
	}
`;

export const StyledButton = styled.button`
	height: 40px;
	width: 94px;
	background-color: ${COLORS.DARK_BLUE};
	outline: none;
	border: 1px solid ${COLORS.DARK_BLUE};
	border-radius: 5px;
	box-sizing: border-box;
	color: ${COLORS.WHITE};
	font-size: 16px;
	font-weight: 500;
	margin-left: 10px;
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
	}
	@media (max-width: 430px) {
		width: 75px;
		margin-left: 4px;
	}
`;
