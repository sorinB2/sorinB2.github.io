import React from 'react';

// Components
import DropDown from '../UI/DropDown/DropDown';
import SearchForm from '../UI/SearchForm/SearchForm';
import { ClearFiltersButton, FiltersWrapper } from './StyledComponents';

// Other resources
import { GENDER_FILTERS, SPECIES_FILTERS, STATUS_FILTERS } from '../../constants/filters';
import { STRINGS } from '../../constants/strings';

const CharacterFilters = (props: CharacterFilterProps) => {
	const { name, nameHandler, status, statusHandler, gender, genderHandler, species, speciesHandler, clearHandler } =
		props;
	return (
		<FiltersWrapper>
			<SearchForm onChange={nameHandler} filterValue={name} />
			<div>
				<DropDown name="Status" options={STATUS_FILTERS} value={status} onChange={statusHandler} />
				<DropDown name="Gender" options={GENDER_FILTERS} value={gender} onChange={genderHandler} />
				<DropDown name="Species" options={SPECIES_FILTERS} value={species} onChange={speciesHandler} />
			</div>
			<ClearFiltersButton onClick={clearHandler}>{STRINGS.CLEAR_FILTERS}</ClearFiltersButton>
		</FiltersWrapper>
	);
};

export default React.memo(CharacterFilters);

interface CharacterFilterProps {
	name: string;
	nameHandler: (e: string) => void;
	status: string;
	statusHandler: (e: string) => void;
	gender: string;
	genderHandler: (e: string) => void;
	species: string;
	speciesHandler: (e: string) => void;
	clearHandler: () => void;
}
