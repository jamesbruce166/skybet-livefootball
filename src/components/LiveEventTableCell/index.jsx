import React from 'react';
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

const LiveEventTableCell = ({ event }) => {
	const { competitors, scores, status } = event;

	const { name: homeTeamName } = competitors[0];
	const { name: awayTeamName } = competitors[1];
	const { home, away } = scores;
	const { live } = status;

	return (
		<CellContent data-testid='event-cell'>
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

export default LiveEventTableCell;
