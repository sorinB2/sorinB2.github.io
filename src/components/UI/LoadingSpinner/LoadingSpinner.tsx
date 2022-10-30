import React from 'react';

// Components
import { Backdrop, StyledLoader } from './StyledComponents';

const LoadingSpinner = () => {
	return (
		<Backdrop>
			<StyledLoader />
		</Backdrop>
	);
};

export default LoadingSpinner;
