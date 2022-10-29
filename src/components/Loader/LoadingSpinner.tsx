import React from 'react';
import { Backdrop, StyledLoader } from './StyledComponents';

const LoadingSpinner = () => {
	return (
		<Backdrop>
			<StyledLoader />
		</Backdrop>
	);
};

export default LoadingSpinner;
