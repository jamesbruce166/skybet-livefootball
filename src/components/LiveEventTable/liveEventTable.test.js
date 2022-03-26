import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import displayData from './data.json';
import LiveEventTable from './index';
import mockEvents from './__mocks__/events.json';

afterEach(() => {
	cleanup();
});

test('renders correctly', () => {
	const tree = renderer
		.create(<LiveEventTable events={mockEvents} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('should show empty table view if empty', () => {
	const emptyEvents = { data: [] };
	render(<LiveEventTable events={emptyEvents} />);
	const eventTable = screen.queryByTestId('event-table');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(displayData['empty-table-message']);
});

test('should contain row for each event', () => {
	render(<LiveEventTable events={mockEvents} />);
	const eventTable = screen.queryByTestId('event-table');
	const eventCells = screen.queryAllByTestId('event-cell');
	const cellsRendered = eventCells.length;

	expect(eventTable).toBeInTheDocument();
	expect(cellsRendered).toEqual(mockEvents.data.length);
});
