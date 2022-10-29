import { Outlet } from 'react-router-dom';

// Components
import {
	StyledFooter,
	StyledFooterLogo,
	StyledHeader,
	StyledHeaderTitle,
	StyledMain
} from '../components/MainLayout/StyledComponents';

const MainLayout = () => {
	return (
		<>
			<StyledHeader>
				<StyledHeaderTitle>The Rick and Morty API</StyledHeaderTitle>
			</StyledHeader>
			<StyledMain>
				<Outlet />
			</StyledMain>
			<StyledFooter>
				<span>&copy; Sorin Balteanu</span>
				<a href="https://github.com/sorinB2" target="_blank" rel="noreferrer">
					<StyledFooterLogo src={require('../assets/github.png')} alt="GitHub" />
				</a>
			</StyledFooter>
		</>
	);
};

export default MainLayout;
