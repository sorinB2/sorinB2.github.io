import React, { useEffect, useState } from 'react';

// Components
import { StyledInput, StyledButton } from './StyledComponents';

// Other resources
import { STRINGS } from '../../../constants/strings';

const SearchForm = (props: SearchFormProps) => {
	const { onChange, filterValue } = props;
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		if (filterValue !== '') setValue(filterValue);
	}, [filterValue]);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		onChange(value);
	};
	return (
		<form onSubmit={submitHandler}>
			<StyledInput
				placeholder={STRINGS.SEARCH_FOR_CHARACTERS}
				value={value}
				onChange={e => setValue(e.target.value)}
				type="text"
			/>
			<StyledButton type="submit">{STRINGS.SEARCH}</StyledButton>
		</form>
	);
};

export default SearchForm;

interface SearchFormProps {
	onChange: (e: string) => void;
	filterValue: string;
}
