import React from 'react';
import { STRINGS } from '../../constants/strings';

// Components
import { StyledErrorPage } from './StyledComponents';

const ErrorPage = () => {
	return (
		<StyledErrorPage>
			<h2>Oops!!!</h2>
			<h1>{STRINGS.SOMETHING_WENT_WRONG}</h1>
			<p>{STRINGS.ERROR_TEXT}</p>
		</StyledErrorPage>
	);
};

export default ErrorPage;
