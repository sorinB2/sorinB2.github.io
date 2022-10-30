import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const StyledLoader = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	z-index: 1000001;
	&:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid ${COLORS.WHITE};
		border-color: ${COLORS.WHITE} transparent ${COLORS.WHITE} transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(5, 56, 107, 0.05);
	z-index: 1000000;
	display: grid;
	justify-content: center;
	align-content: center;
`;
