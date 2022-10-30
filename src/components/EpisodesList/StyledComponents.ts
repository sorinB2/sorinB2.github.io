import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

interface StyledListItemProps {
	textColor: string;
	fontWeight: string;
	show?: boolean;
}

export const StyledListItem = styled.li`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-gap: 8px;
	background-color: ${COLORS.WHITE};
	border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
	border-radius: 5px;
	padding: 12px 16px;
	font-weight: ${(props: StyledListItemProps) => props.fontWeight};
	color: ${(props: StyledListItemProps) => props.textColor};
	div:nth-child(1) {
		font-weight: 600;
		font-style: italic;
	}
	div:nth-child(3) {
		font-weight: 500;
	}
	@media (max-width: 550px) {
		display: ${(props: StyledListItemProps) => (props.show ? 'grid' : 'none')};
		grid-template-columns: 1fr;
		grid-gap: 4px;
	}
`;

export const StyledTitle = styled.p`
	font-size: 28px;
	font-weight: 600;
	padding: 16px 0;
	margin: 0;
	text-align: center;
	height: 65px;
	box-sizing: border-box;
`;
