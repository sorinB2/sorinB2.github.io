import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const StyledSelect = styled.select`
	background-color: ${COLORS.WHITE};
	border: thin solid ${COLORS.GRAY};
	border-radius: 4px;
	color: ${COLORS.DARK_GRAY};
	display: inline-block;
	font: inherit;
	line-height: 1.5em;
	padding: 0.5em 3.5em 0.5em 1em;
	margin: 0 8px;
	outline: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-appearance: none;
	-moz-appearance: none;
	background-image: linear-gradient(45deg, transparent 50%, gray 50%),
		linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
	background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
	background-size: 5px 5px, 5px 5px, 1px 1.5em;
	background-repeat: no-repeat;
	@media (max-width: 530px) {
		width: 404px;
	}
	@media (max-width: 430px) {
		width: 330px;
	}
`;
