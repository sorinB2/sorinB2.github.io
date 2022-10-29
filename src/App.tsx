import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import CharactersList from './pages/CharactersList';

// Other resources
import { ROUTES } from './constants/routes';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<CharactersList />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
