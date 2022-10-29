import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import EpisodesList from '../components/EpisodesList/EpisodesList';
import CharacterCard from '../components/CharacterDetails/CharacterCard';
import { StyledCharacterDetails } from '../components/CharacterDetails/StyledComponents';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_CHARACTER_DETAILS } from '../query/query';

const CharacterDetails = () => {
	const params = useParams();
	const { data, isLoading, error } = useGQLQuery({
		api: api,
		key: 'character',
		query: GET_CHARACTER_DETAILS,
		variables: { id: params.characterId }
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong</div>;

	console.log(data);
	return (
		<StyledCharacterDetails>
			<CharacterCard {...data.character} />
			<EpisodesList />
		</StyledCharacterDetails>
	);
};

export default CharacterDetails;
