import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import { EventsContext } from '../../contexts/EventProvider';
import { SocketContext } from '../../contexts/SocketProvider';
import { DisplaySettingsContext } from '../../contexts/DisplaySettingsProvider';

import displayData from './data.json';
import LiveEventTable from './index';
import mockEvents from './__mocks__/events.json';

afterEach(() => {
	cleanup();
});

function renderLiveEventTable(events) {
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
				<EventsContext.Provider value={{ events }}>
					<LiveEventTable />
				</EventsContext.Provider>
			</SocketContext.Provider>
		</DisplaySettingsContext.Provider>
	);
}

test('renders correctly', () => {
	const tree = renderer.create(renderLiveEventTable(mockEvents)).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should show empty table view if undefined', () => {
	const undefinedEvents = { data: undefined };
	render(renderLiveEventTable(undefinedEvents));
	const eventTable = screen.queryByTestId('event-table');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(displayData['empty-table-message']);
});

test('should show empty table view if empty', () => {
	const emptyEvents = { data: [] };
	render(renderLiveEventTable(emptyEvents));
	const eventTable = screen.queryByTestId('event-table');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(displayData['empty-table-message']);
});

test('should contain row for each event', () => {
	render(renderLiveEventTable(mockEvents));
	const eventTable = screen.queryByTestId('event-table');
	const eventCells = screen.queryAllByTestId('event-cell');
	const cellsRendered = eventCells.length;

	expect(eventTable).toBeInTheDocument();
	expect(cellsRendered).toEqual(mockEvents.data.length);
});
