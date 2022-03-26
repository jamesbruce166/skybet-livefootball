import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import LiveEventTableCell from './index';
import mockEvent from './__mocks__/liveEvent.json';

afterEach(() => {
	cleanup();
});

test('renders correctly', () => {
	const tree = renderer
		.create(<LiveEventTableCell event={mockEvent} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('should display home team name', () => {
	render(<LiveEventTableCell event={mockEvent} />);
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.competitors[0].name);
});

test('should display away team name', () => {
	render(<LiveEventTableCell event={mockEvent} />);
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.competitors[1].name);
});

test('should display home team score', () => {
	render(<LiveEventTableCell event={mockEvent} />);
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.scores.home);
});

test('should display away team score', () => {
	render(<LiveEventTableCell event={mockEvent} />);
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent(mockEvent.scores.away);
});

test('should display is live', () => {
	render(<LiveEventTableCell event={mockEvent} />);
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).toHaveTextContent('LIVE');
});

test('should hide live status when finished', () => {
	mockEvent.status.live = false;
	render(<LiveEventTableCell event={mockEvent} />);

	mockEvent.status.live = true;
	const eventCell = screen.queryByTestId('event-cell');

	expect(eventCell).toBeInTheDocument();
	expect(eventCell).not.toHaveTextContent('LIVE');
});
