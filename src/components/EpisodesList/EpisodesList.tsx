import React from 'react';

// Components
import EpisodeListItem from './EpisodeListItem';

const EpisodesList = (props: EpisodesListProps) => {
	const { episodes } = props;
	return (
		<div>
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
