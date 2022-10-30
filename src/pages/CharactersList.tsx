import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Character from '../components/Character/Character';
import { ListWrapper, StyledList } from '../components/CharactersList/StyledComponents';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import Pagination from '../components/UI/Pagination/Pagination';
import CharacterFilters from '../components/CharacterFilters/CharacterFilters';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_CHARACTERS } from '../query/query';
import { CharacterType } from '../types/types';
import { ROUTES } from '../constants/routes';

const CharactersList = () => {
	const navigate = useNavigate();
	const [statusFilter, setStatusFilter] = useState<string>('');
	const [genderFilter, setGenderFilter] = useState<string>('');
	const [speciesFilter, setSpeciesFilter] = useState<string>('');
	const [nameFilter, setNameFilter] = useState<string>('');
	const [page, setPage] = useState<number | null>(1);

	const { data, isLoading, isFetching, error, refetch } = useGQLQuery({
		api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: {
			page,
			filter: { name: nameFilter, status: statusFilter, species: speciesFilter, gender: genderFilter }
		}
	});

	useEffect(() => {
		refetch();
	}, [statusFilter, genderFilter, speciesFilter, refetch, nameFilter, page]);

	const characterClickHandler = (e: React.MouseEvent) => {
		navigate(`${ROUTES.CHARACTERS}/${e.currentTarget.id}`);
	};

	const clearFiltersHandler = () => {
		setStatusFilter('');
		setGenderFilter('');
		setSpeciesFilter('');
		setNameFilter('');
	};

	const nameChangeHandler = (e: string) => {
		setNameFilter(e);
		setPage(1);
	};

	const statusChangeHandler = (e: string) => {
		setStatusFilter(e);
		setPage(1);
	};

	const genderChangeHandler = (e: string) => {
		setGenderFilter(e);
		setPage(1);
	};

	const speciesChangeHandler = (e: string) => {
		setSpeciesFilter(e);
		setPage(1);
	};

	if (isLoading || isFetching) return <LoadingSpinner />;

	if (error) return <div>Something went wrong</div>;
	return (
		<ListWrapper>
			<CharacterFilters
				name={nameFilter}
				nameHandler={nameChangeHandler}
				status={statusFilter}
				statusHandler={statusChangeHandler}
				gender={genderFilter}
				genderHandler={genderChangeHandler}
				species={speciesFilter}
				speciesHandler={speciesChangeHandler}
				clearHandler={clearFiltersHandler}
			/>
			<StyledList>
				{data.characters.results.map((character: CharacterType) => {
					return <Character key={character.id} {...character} onClick={characterClickHandler} />;
				})}
			</StyledList>
			<Pagination currentPage={page} info={data.characters.info} onClick={setPage} />
		</ListWrapper>
	);
};

export default CharactersList;
