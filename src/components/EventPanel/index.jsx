import React, { useState } from 'react';
import {
	Section,
	GameBox,
	TeamTextContainer,
	TeamText,
	TimeLabel,
	TimeStarted,
	MarketContainer,
	Outcome,
	OutcomeName,
	OutcomePrice,
	Tabs,
	Tab,
	Content,
	EmptyDataText,
} from './eventPanel.styles';
import displayData from './data';

import { useEvents } from '../../contexts/EventProvider';

const EventPanel = () => {
	const { selectedEvent } = useEvents();

	const EmptyData = () => {
		return (
			<EmptyDataText>{displayData['empty-data-message']}</EmptyDataText>
		);
	};

	const SelectedEventData = () => {
		const { competitors, scores, startTime, markets } = selectedEvent;

		const { name: homeTeamName } = competitors[0];
		const { name: awayTeamName } = competitors[1];
		const { home, away } = scores;

		const [active, setActive] = useState(0);

		const tabHandler = (e) => {
			const index = parseInt(e.target.id, 0);
			if (index !== active) {
				setActive(index);
			}
		};

		const renderStartTime = (d) => {
			const date = new Date(d);
			const hour = date.getHours();
			const minutes = date.getMinutes();
			return `${hour}:${minutes}`;
		};

		return (
			<>
				<GameBox>
					<TeamTextContainer>
						<TeamText>{homeTeamName}</TeamText>
						<TeamText>
							{home} - {away}
						</TeamText>
						<TeamText>{awayTeamName}</TeamText>
					</TeamTextContainer>
					<TimeLabel>Started At</TimeLabel>
					<TimeStarted>{renderStartTime(startTime)}</TimeStarted>
				</GameBox>
				<MarketContainer isMinimised>
					<Tabs>
						<Tab onClick={tabHandler} active={active === 0} id={0}>
							Both Teams To Score
						</Tab>
					</Tabs>

					<Content active={active === 0}>
						<Outcome>
							<OutcomeName>Yes</OutcomeName>
							<OutcomePrice>1/7</OutcomePrice>
						</Outcome>
					</Content>
				</MarketContainer>
			</>
		);
	};

	return (
		<Section data-testid='selected-event'>
			{selectedEvent ? <SelectedEventData /> : <EmptyData />}
		</Section>
	);
};

export default EventPanel;
