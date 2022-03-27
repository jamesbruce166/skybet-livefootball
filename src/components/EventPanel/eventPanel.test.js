import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import { EventsContext } from '../../contexts/EventProvider';
import { SocketContext } from '../../contexts/SocketProvider';
import { DisplaySettingsContext } from '../../contexts/DisplaySettingsProvider';

import displayData from './data.json';
import EventPanel from './index';
import mockEvent from './__mocks__/event.json';

afterEach(() => {
	cleanup();
});

function renderEventPanel(event) {
	const displayOptions = {
		FRACTION: 'decimal',
		DECIMAL: 'fraction',
	};
	const oddsDisplay = displayOptions.DECIMAL;
	return (
		<DisplaySettingsContext.Provider
			value={{ oddsDisplay, displayOptions }}
		>
			<SocketContext.Provider>
				<EventsContext.Provider value={{ selectedEvent: event }}>
					<EventPanel />
				</EventsContext.Provider>
			</SocketContext.Provider>
		</DisplaySettingsContext.Provider>
	);
}

test('renders correctly', () => {
	const tree = renderer.create(renderEventPanel(mockEvent)).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should show empty data view if empty', () => {
	render(renderEventPanel(undefined));
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(displayData['empty-data-message']);
});

test('should show event home team name', () => {
	render(renderEventPanel(mockEvent));
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(mockEvent.competitors[0].name);
});

test('should show event away team name', () => {
	render(renderEventPanel(mockEvent));
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(mockEvent.competitors[1].name);
});

test('should show event score', () => {
	const { scores } = mockEvent;
	const { home, away } = scores;
	render(renderEventPanel(mockEvent));
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(`${home} - ${away}`);
});

test('should show event start time', () => {
	const { startTime } = mockEvent;

	const renderStartTime = () => {
		const date = new Date(startTime);
		const hour = date.getHours();
		const minutes = date.getMinutes();
		return `${hour}:${minutes}`;
	};

	render(renderEventPanel(mockEvent));
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(renderStartTime());
});
