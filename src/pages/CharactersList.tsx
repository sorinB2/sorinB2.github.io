import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Character from '../components/Character/Character';
import { ListWrapper, SortingWrapper, StyledList } from '../components/CharactersList/StyledComponents';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import Pagination from '../components/UI/Pagination/Pagination';
import CharacterFilters from '../components/CharacterFilters/CharacterFilters';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import DropDown from '../components/UI/DropDown/DropDown';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_ALL_CHARACTERS, GET_CHARACTERS } from '../query/query';
import { CharacterType } from '../types/types';
import { ROUTES } from '../constants/routes';
import { STRINGS } from '../constants/strings';
import { SORTING_OPTIONS } from '../constants/filters';

const CharactersList = () => {
	const navigate = useNavigate();
	const [statusFilter, setStatusFilter] = useState<string>('');
	const [genderFilter, setGenderFilter] = useState<string>('');
	const [speciesFilter, setSpeciesFilter] = useState<string>('');
	const [nameFilter, setNameFilter] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	const [sortingOption, setSortingOption] = useState<string>('');
	const [isSorting, setIsSorting] = useState<boolean>(false);
	const [allCharactersFetched, setAllCharactersFetched] = useState<boolean>(false);
	const [sortedCharacters, setSortedCharacters] = useState<CharacterType[]>([]);
	const [sortedCharactersByPage, setSortedCharactersByPage] = useState<CharacterType[]>([]);
	const [pageData, setPageData] = useState<CharacterType[]>([]);
	const [idsArray, setIdsArray] = useState<number[]>([]);

	const { data, isLoading, isFetching, error, refetch } = useGQLQuery({
		api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: {
			page,
			filter: { name: nameFilter, status: statusFilter, species: speciesFilter, gender: genderFilter }
		}
	});

	const {
		data: allData,
		isLoading: allLoading,
		refetch: getAllData
	} = useGQLQuery({
		api,
		key: 'allCharacters',
		query: GET_ALL_CHARACTERS,
		variables: { ids: [...idsArray] },
		config: { enabled: false }
	});

	useEffect(() => {
		const arr = Array.from({ length: 826 }, (_, i) => i + 1);
		setIdsArray(arr);
	}, []);

	useEffect(() => {
		if (allData) {
			const sorted = allData.charactersByIds.sort((a: CharacterType, b: CharacterType) => {
				if (sortingOption === 'Ascending') return a.name > b.name ? 1 : -1;
				if (sortingOption === 'Descending') return a.name < b.name ? 1 : -1;
				return [];
			});
			if (statusFilter || genderFilter || speciesFilter || nameFilter) {
				const sortedFiltered = sorted.filter((item: CharacterType) => {
					return (
						item.gender.includes(genderFilter) &&
						item.status.includes(statusFilter) &&
						item.species.includes(speciesFilter) &&
						item.name.toLowerCase().includes(nameFilter.toLowerCase())
					);
				});
				setSortedCharacters(sortedFiltered);
			} else {
				setSortedCharacters(sorted);
			}
		}
	}, [allData, genderFilter, nameFilter, sortingOption, speciesFilter, statusFilter]);

	useEffect(() => {
		setSortedCharactersByPage(sortedCharacters.slice((page - 1) * 20, page * 20));
	}, [page, sortedCharacters, sortingOption]);

	useEffect(() => {
		if (isSorting) {
			setPageData(sortedCharactersByPage);
		} else {
			if (data) setPageData(data.characters.results);
		}
	}, [data, isSorting, sortedCharactersByPage]);

	useEffect(() => {
		if (sortingOption === 'Unsort') setIsSorting(false);
	}, [sortingOption]);

	useEffect(() => {
		refetch();
	}, [statusFilter, genderFilter, speciesFilter, refetch, nameFilter, page]);

	const changeSortingHandler = (e: string) => {
		!allCharactersFetched && getAllData();
		setSortingOption(e);
		setIsSorting(true);
		setAllCharactersFetched(true);
	};

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
		setPage(1);
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
			<div>
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
				<SortingWrapper>
					<DropDown
						name="Sort"
						options={SORTING_OPTIONS}
						value={sortingOption}
						onChange={changeSortingHandler}
					/>
				</SortingWrapper>
			</div>
			{isLoading || isFetching || allLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<StyledList>
						{pageData.length === 0 && <h2>{STRINGS.CHARACTERS_NOT_FOUND}</h2>}
						{pageData.map((character: CharacterType) => {
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
