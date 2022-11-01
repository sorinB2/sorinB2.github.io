import styled from 'styled-components';

export const StyledList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	margin: 16px 16px 0;
	justify-content: center;
`;

export const ListWrapper = styled.div`
	min-height: calc(100vh - 142px);
	display: grid;
`;

export const SortingWrapper = styled.div`
	display: flex;
	width: 1136px;
	justify-content: end;
	margin: 24px auto 0;
	@media (min-width: 1722px) {
		width: 1712px;
	}
	@media (max-width: 1150px) {
		width: 566px;
	}
	@media (max-width: 610px) {
		width: auto;
		justify-content: center;
	}
`;
