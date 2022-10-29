import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: #2d3748;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledHeaderTitle = styled.h1`
	font-size: 28px;
	color: white;
	font-weight: 900;
	margin: 0 20px;
`;

export const StyledMain = styled.main`
	min-height: calc(100vh - 142px);
	padding: 16px 0;
`;

export const StyledFooter = styled.footer`
	background-color: #2d3748;
	height: 55px;
	color: white;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

export const StyledFooterLogo = styled.img`
	width: 24px;
	height: 24px;
`;
