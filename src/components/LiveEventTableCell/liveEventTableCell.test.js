import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import { EventsContext } from '../../contexts/EventProvider';
import { SocketContext } from '../../contexts/SocketProvider';
import { DisplaySettingsContext } from '../../contexts/DisplaySettingsProvider';

import LiveEventTableCell from './index';
import mockEvent from './__mocks__/liveEvent.json';

afterEach(() => {
	cleanup();
});

function renderLiveEventTableCell(event) {
	const displayOptions = {
		FRACTION: 'decimal',
		DECIMAL: 'fraction',
	};
	const oddsDisplay = displayOptions.DECIMAL;
	return (
		<DisplaySettingsContext.Provider
			value={{ oddsDisplay, displayOptions }}
		>
			<SocketContext.Provider value={{}}>
				<EventsContext.Provider value={{ setSelectedEvent: () => {} }}>
					<LiveEventTableCell event={event} />
				</EventsContext.Provider>
			</SocketContext.Provider>
		</DisplaySettingsContext.Provider>
	);
}

test('renders correctly', () => {
	const tree = renderer.create(renderLiveEventTableCell(mockEvent)).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should display home team name', () => {
	render(renderLiveEventTableCell(mockEvent));
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.competitors[0].name);
});

test('should display away team name', () => {
	render(renderLiveEventTableCell(mockEvent));
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.competitors[1].name);
});

test('should display home team score', () => {
	render(renderLiveEventTableCell(mockEvent));
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.scores.home);
});

test('should display away team score', () => {
	render(renderLiveEventTableCell(mockEvent));
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.scores.away);
});

test('should display is live', () => {
	render(renderLiveEventTableCell(mockEvent));
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent('LIVE');
});

test('should hide live status when finished', () => {
	mockEvent.status.live = false;
	render(renderLiveEventTableCell(mockEvent));

	mockEvent.status.live = true;
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).not.toHaveTextContent('LIVE');
});
