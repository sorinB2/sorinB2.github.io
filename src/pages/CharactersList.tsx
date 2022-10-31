import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Character from '../components/Character/Character';
import { ListWrapper, StyledList } from '../components/CharactersList/StyledComponents';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import Pagination from '../components/UI/Pagination/Pagination';
import CharacterFilters from '../components/CharacterFilters/CharacterFilters';
import ErrorPage from '../components/ErrorPage/ErrorPage';

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

	const characterClickHandler = useCallback(
		(e: React.MouseEvent) => {
			navigate(`${ROUTES.CHARACTERS}/${e.currentTarget.id}`);
		},
		[navigate]
	);

	const clearFiltersHandler = useCallback(() => {
		setStatusFilter('');
		setGenderFilter('');
		setSpeciesFilter('');
		setNameFilter('');
	}, []);

	const nameChangeHandler = useCallback((e: string) => {
		setNameFilter(e);
		setPage(1);
	}, []);

	const statusChangeHandler = useCallback((e: string) => {
		setStatusFilter(e);
		setPage(1);
	}, []);

	const genderChangeHandler = useCallback((e: string) => {
		setGenderFilter(e);
		setPage(1);
	}, []);

	const speciesChangeHandler = useCallback((e: string) => {
		setSpeciesFilter(e);
		setPage(1);
	}, []);

	if (error) return <ErrorPage />;
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
			{isLoading || isFetching ? (
				<LoadingSpinner />
			) : (
				<>
					<StyledList>
						{data.characters.results.map((character: CharacterType) => {
							return <Character key={character.id} {...character} onClick={characterClickHandler} />;
						})}
					</StyledList>
					<Pagination currentPage={page} info={data.characters.info} onClick={setPage} />
				</>
			)}
		</ListWrapper>
	);
};

export default CharactersList;
