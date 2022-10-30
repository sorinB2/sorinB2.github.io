import React from 'react';
import { COLORS } from '../../constants/colors';
import { StyledListItem } from './StyledComponents';

const EpisodeListItem = (props: EpisodesListItemProps) => {
	const { episode } = props;
	return (
		<StyledListItem
			textColor={episode.id === 'Header' ? COLORS.BLACK : COLORS.DARK_GRAY}
			fontWeight={episode.id === 'Header' ? '600' : '400'}
		>
			<div>{episode.name}</div>
			<div>{episode.episode}</div>
			<div>{episode.air_date}</div>
		</StyledListItem>
	);
};

export default EpisodeListItem;

interface EpisodesListItemProps {
	episode: {
		name: string;
		air_date: string;
		episode: string;
		id: string;
	};
}
