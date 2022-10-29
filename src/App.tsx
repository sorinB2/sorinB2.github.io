import Character from './components/Character/Character';

const App = () => (
	<Character
		name="Shrek the musical fan"
		image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
		status="Dead"
		species="Human"
		origin={{ name: 'Earth (Replacement Dimension)' }}
	/>
);

export default App;
