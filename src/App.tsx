import { api } from './api/api';
import Character from './components/Character/Character';
import { useGQLQuery } from './hooks/useGQLQuery';
import { GET_CHARACTERS } from './query/query';
import { CharacterType } from './types/types';

const App = () => {
	const { data, isLoading, error } = useGQLQuery({
		api: api,
		key: 'characters',
		query: GET_CHARACTERS,
		variables: { page: 5 }
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong</div>;

	return (
		<>
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
		</>
	);
};

export default App;
