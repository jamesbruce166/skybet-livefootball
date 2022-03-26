import React from 'react';
import PropTypes from 'prop-types';

import {
	CellContent,
	CompetitorBox,
	SubRow,
	TeamNameText,
	ScoreText,
	StatusBox,
	Chevron,
} from './liveEventTableCell.styles';
import { LiveBadge } from '../common/common.styles';

import { useEvents } from '../../contexts/EventProvider';

const LiveEventTableCell = ({ event }) => {
	const { competitors, scores, status } = event;
	const { setSelectedEvent } = useEvents();

	const handleClickEvent = () => setSelectedEvent(event);

	const { name: homeTeamName } = competitors[0];
	const { name: awayTeamName } = competitors[1];
	const { home, away } = scores;
	const { live } = status;

	return (
		<CellContent data-testid='event-cell' onClick={handleClickEvent}>
			<CompetitorBox>
				<SubRow>
					<TeamNameText>{homeTeamName}</TeamNameText>
					<ScoreText>{home}</ScoreText>
				</SubRow>
				<SubRow>
					<TeamNameText>{awayTeamName}</TeamNameText>
					<ScoreText>{away}</ScoreText>
				</SubRow>
			</CompetitorBox>
			<StatusBox>
				{live && <LiveBadge>LIVE</LiveBadge>}
				<Chevron />
			</StatusBox>
		</CellContent>
	);
};

LiveEventTableCell.propTypes = {
	event: PropTypes.object.isRequired,
};

export default LiveEventTableCell;
