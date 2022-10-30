import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Character from '../components/Character/Character';
import { StyledList } from '../components/CharactersList/StyledComponents';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import DropDown from '../components/UI/DropDown/DropDown';
import SearchForm from '../components/UI/SearchForm/SearchForm';
import { ClearFiltersButton, FiltersWrapper } from '../components/UI/Filters/StyledComponents';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_CHARACTERS } from '../query/query';
import { CharacterType } from '../types/types';
import { ROUTES } from '../constants/routes';
import { GENDER_FILTERS, SPECIES_FILTERS, STATUS_FILTERS } from '../constants/filters';
import { STRINGS } from '../constants/strings';

const CharactersList = () => {
	const navigate = useNavigate();
	const [statusFilter, setStatusFilter] = useState<string>('');
	const [genderFilter, setGenderFilter] = useState<string>('');
	const [speciesFilter, setSpeciesFilter] = useState<string>('');
	const [nameFilter, setNameFilter] = useState<string>('');

	const { data, isLoading, isFetching, error, refetch } = useGQLQuery({
		api: api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: {
			page: 1,
			filter: { name: nameFilter, status: statusFilter, species: speciesFilter, gender: genderFilter }
		}
	});

	useEffect(() => {
		refetch();
	}, [statusFilter, genderFilter, speciesFilter, refetch, nameFilter]);

	const characterClichHandler = (e: React.MouseEvent) => {
		navigate(`${ROUTES.CHARACTERS}/${e.currentTarget.id}`);
	};

	const clearFiltersHandler = () => {
		setStatusFilter('');
		setGenderFilter('');
		setSpeciesFilter('');
		setNameFilter('');
	};

	if (isLoading || isFetching) return <LoadingSpinner />;

	if (error) return <div>Something went wrong</div>;
	return (
		<div>
			<FiltersWrapper>
				<SearchForm onChange={setNameFilter} filterValue={nameFilter} />
				<div>
					<DropDown name="Status" options={STATUS_FILTERS} value={statusFilter} onChange={setStatusFilter} />
					<DropDown name="Gender" options={GENDER_FILTERS} value={genderFilter} onChange={setGenderFilter} />
					<DropDown
						name="Species"
						options={SPECIES_FILTERS}
						value={speciesFilter}
						onChange={setSpeciesFilter}
					/>
				</div>
				<ClearFiltersButton onClick={clearFiltersHandler}>{STRINGS.CLEAR_FILTERS}</ClearFiltersButton>
			</FiltersWrapper>
			<StyledList>
				{data.characters.results.map((character: CharacterType) => {
					return <Character key={character.id} {...character} onClick={characterClichHandler} />;
				})}
			</StyledList>
		</div>
	);
};

export default CharactersList;
