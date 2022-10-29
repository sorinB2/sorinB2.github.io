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

const CharactersList = () => {
	const { data, isLoading, error } = useGQLQuery({
		api: api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: { page: 1 }
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong</div>;
	return (
		<StyledList>
			{data.characters.results.map((character: CharacterType) => {
				return (
					<Character
						key={character.id}
						name={character.name}
						image={character.image}
						status={character.status}
						species={character.species}
						origin={character.origin}
					/>
				);
			})}
		</StyledList>
	);
};

export default CharactersList;
