import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

interface StyledListItemProps {
	textColor: string;
	fontWeight: string;
}

export const StyledListItem = styled.li`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	background-color: ${COLORS.WHITE};
	border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
	border-radius: 5px;
	padding: 12px 16px;
	font-weight: ${(props: StyledListItemProps) => props.fontWeight};
	color: ${(props: StyledListItemProps) => props.textColor};
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
