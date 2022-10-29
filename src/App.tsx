import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Components
import CharactersList from './pages/CharactersList';
import CharacterDetails from './pages/CharacterDetails';
import MainLayout from './layouts/MainLayout';

// Other resources
import { ROUTES } from './constants/routes';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={ROUTES.HOME} element={<Navigate to={ROUTES.CHARACTERS} />} />
					<Route path={ROUTES.CHARACTERS} element={<CharactersList />} />
					<Route path={ROUTES.CHARACTER_DETAILS} element={<CharacterDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
