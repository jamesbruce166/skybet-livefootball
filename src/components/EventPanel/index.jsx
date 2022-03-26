import React, { useState } from 'react';
import {
	Menu,
	MenuItem,
	SubMenu,
	MenuHeader,
	MenuRadioGroup,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {
	Section,
	GameBox,
	TeamTextContainer,
	TeamText,
	TimeLabel,
	TimeStarted,
	EmptyDataText,
	ControlBar,
	MenuIcon,
} from './eventPanel.styles';
import MarketTabs from '../MarketTabs';

import displayData from './data';
import { useEvents } from '../../contexts/EventProvider';

const EventPanel = () => {
	const displayOptions = {
		FRACTION: displayData['format-options'].fraction,
		DECIMAL: displayData['format-options'].decimal,
	};

	const [oddsDisplay, setOddsDisplay] = useState(displayOptions.DECIMAL);
	const { selectedEvent } = useEvents();

	const radioChangeHandler = (e) => setOddsDisplay(e.value);

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
				<MarketTabs
					markets={markets}
					oddsDisplay={oddsDisplay}
					displayOptions={displayOptions}
				/>
			</>
		);
	};

	return (
		<Section data-testid='selected-event'>
			<ControlBar>
				<Menu menuButton={<MenuIcon />}>
					<MenuHeader>Display Settings</MenuHeader>
					<SubMenu label={displayData['menu-odds-label']}>
						<MenuRadioGroup
							value={oddsDisplay}
							onRadioChange={radioChangeHandler}
						>
							<MenuItem
								type='radio'
								value={displayOptions.FRACTION}
							>
								{displayData['format-options'].fraction}
							</MenuItem>
							<MenuItem
								type='radio'
								value={displayOptions.DECIMAL}
							>
								{displayData['format-options'].decimal}
							</MenuItem>
						</MenuRadioGroup>
					</SubMenu>
				</Menu>
			</ControlBar>
			{selectedEvent ? <SelectedEventData /> : <EmptyData />}
		</Section>
	);
};

export default EventPanel;
