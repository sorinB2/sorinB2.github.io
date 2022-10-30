import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import EpisodesList from '../components/EpisodesList/EpisodesList';
import CharacterCard from '../components/CharacterDetails/CharacterCard';
import { BackButton, StyledCharacterDetails } from '../components/CharacterDetails/StyledComponents';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../components/ErrorPage/ErrorPage';

// Actions
import { useGQLQuery } from '../hooks/useGQLQuery';

// Other resources
import { api } from '../api/api';
import { GET_CHARACTER_DETAILS } from '../query/query';
import { STRINGS } from '../constants/strings';
import { ROUTES } from '../constants/routes';

const CharacterDetails = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { data, isLoading, isFetching, error } = useGQLQuery({
		api: api,
		key: 'character',
		query: GET_CHARACTER_DETAILS,
		variables: { id: params.characterId }
	});

	if (isLoading || isFetching) return <LoadingSpinner />;

	if (error) return <ErrorPage />;

	const goBackHandler = () => {
		navigate(ROUTES.CHARACTERS);
	};

	return (
		<StyledCharacterDetails>
			<div>
				<BackButton onClick={goBackHandler}>{STRINGS.GO_BACK}</BackButton>
				<CharacterCard {...data.character} />
			</div>
			<EpisodesList episodes={data.character.episode} />
		</StyledCharacterDetails>
	);
};

export default CharacterDetails;
