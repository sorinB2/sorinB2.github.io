import React from 'react';

// Components
import { StyledSelect } from './StyledComponents';

const DropDown = (props: DropDownProps) => {
	const { name, options, onChange, value } = props;
	return (
		<StyledSelect name={name} id={name} value={value} onChange={e => onChange(e.target.value)}>
			<option hidden disabled value="">
				{name}
			</option>
			{options.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			})}
		</StyledSelect>
	);
};

export default React.memo(DropDown);

interface DropDownProps {
	name: string;
	options: string[];
	onChange: (e: string) => void;
	value: string;
}
