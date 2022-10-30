import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const FiltersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

export const ClearFiltersButton = styled.button`
	border: none;
	background-color: ${COLORS.DARK_BLUE};
	border-radius: 5px;
	padding: 8px 16px;
	color: ${COLORS.WHITE};
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
	}
`;
