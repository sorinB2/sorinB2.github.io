import React from 'react';

// Components
import { PageButton, PaginationWrapper, StyledDots } from './StyledComponents';

const Pagination = (props: PaginationProps) => {
	const { currentPage, info, onClick } = props;
	const { pages, prev, next } = info;
	return (
		<PaginationWrapper>
			<PageButton disabled={prev === null} onClick={() => onClick(prev)}>
				{'<'}
			</PageButton>
			{prev && <PageButton onClick={() => onClick(1)}>1</PageButton>}
			{prev && prev !== 1 && <StyledDots>...</StyledDots>}
			{prev && prev !== 1 && <PageButton onClick={() => onClick(prev)}>{prev}</PageButton>}
			<PageButton currentPage>{currentPage}</PageButton>
			{next && <PageButton onClick={() => onClick(next)}>{next}</PageButton>}
			{next && next !== pages && <StyledDots>...</StyledDots>}
			{next && next !== pages && <PageButton onClick={() => onClick(pages)}>{pages}</PageButton>}
			<PageButton disabled={next === null} onClick={() => onClick(next)}>
				{'>'}
			</PageButton>
		</PaginationWrapper>
	);
};

export default Pagination;

interface PaginationProps {
	currentPage: number | null;
	info: {
		count: number | null;
		pages: number | null;
		prev: number | null;
		next: number | null;
	};
	onClick: (e: number | null) => void;
}
