import React from 'react';

// Components
import EpisodeListItem from './EpisodeListItem';
import { StyledTitle } from './StyledComponents';

const EpisodesList = (props: EpisodesListProps) => {
	const { episodes } = props;
	return (
		<div>
			<StyledTitle>Participate in {episodes.length} episodes</StyledTitle>
			<EpisodeListItem episode={{ name: 'Name', air_date: 'Date', episode: 'Episode', id: 'Header' }} />
			{episodes.map(episode => {
				return <EpisodeListItem key={episode.id} episode={episode} />;
			})}
		</div>
	);
};

export default EpisodesList;

interface EpisodesListProps {
	episodes: {
		name: string;
		air_date: string;
		episode: string;
		id: string;
	}[];
}
