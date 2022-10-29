import React from 'react';

// Components
import Character from '../components/Character/Character';
import { StyledList } from '../components/CharactersList/StyledComponents';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_CHARACTERS } from '../query/query';
import { CharacterType } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import LoadingSpinner from '../components/Loader/LoadingSpinner';

const CharactersList = () => {
	const navigate = useNavigate();
	const { data, isLoading, isFetching, error } = useGQLQuery({
		api: api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: { page: 1 }
	});

	const characterClichHandler = (e: React.MouseEvent) => {
		navigate(`${ROUTES.CHARACTERS}/${e.currentTarget.id}`);
	};

	if (isLoading || isFetching) return <LoadingSpinner />;

	if (error) return <div>Something went wrong</div>;
	return (
		<StyledList>
			{data.characters.results.map((character: CharacterType) => {
				return <Character key={character.id} {...character} onClick={characterClichHandler} />;
			})}
		</StyledList>
	);
};

export default CharactersList;
