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

import data from '../../data/liveEvents.json';

const LiveEventTableCell = () => {
	const { competitors, scores, status } = data.data[0];

	const { name: homeTeamName } = competitors[0];
	const { name: awayTeamName } = competitors[1];
	const { home, away } = scores;
	const { live } = status;

	return (
		<CellContent>
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
				{live && <p>LIVE</p>}
				<Chevron />
			</StatusBox>
		</CellContent>
	);
};

export default LiveEventTableCell;
