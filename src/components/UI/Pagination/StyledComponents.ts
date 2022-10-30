import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

interface PageButtonProps {
	currentPage?: boolean;
}

export const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-self: end;
	margin-top: 24px;
`;

export const PageButton = styled.button`
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${COLORS.GRAY};
	border-radius: 2px;
	background-color: ${(props: PageButtonProps) => (props.currentPage ? COLORS.TRANSPARENT_BLUE : '')};
	margin: 0 3px;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.TRANSPARENT_BLUE};
	}
`;

export const StyledDots = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
`;
