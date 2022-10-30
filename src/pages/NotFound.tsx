import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { StyledButton, StyledError, StyledNotFound } from '../components/NotFound/StyledComponents';

// Other resources
import { ROUTES } from '../constants/routes';
import { STRINGS } from '../constants/strings';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<StyledNotFound>
			<StyledError>404</StyledError>
			<h3>Oops!!!</h3>
			<h2>{STRINGS.PAGE_UNAVAILABLE}</h2>
			<StyledButton onClick={() => navigate(ROUTES.HOME)}>{STRINGS.GO_BACK_HOME}</StyledButton>
		</StyledNotFound>
	);
};

export default NotFound;
