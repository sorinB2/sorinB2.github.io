import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Components
import CharactersList from './pages/CharactersList';

// Other resources
import { ROUTES } from './constants/routes';
import CharacterDetails from './pages/CharacterDetails';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Navigate to={ROUTES.CHARACTERS} />} />
				<Route path={ROUTES.CHARACTERS} element={<CharactersList />} />
				<Route path={ROUTES.CHARACTER_DETAILS} element={<CharacterDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
