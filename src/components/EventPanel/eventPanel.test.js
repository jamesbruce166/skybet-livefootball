import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import displayData from './data.json';
import EventPanel from './index';
import mockEvent from './__mocks__/event.json';

afterEach(() => {
	cleanup();
});

test('renders correctly', () => {
	const tree = renderer
		.create(<EventPanel selectedEvent={mockEvent} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('should show empty data view if empty', () => {
	render(<EventPanel selectedEvent={undefined} />);
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(displayData['empty-data-message']);
});

test('should show event home team name', () => {
	render(<EventPanel selectedEvent={mockEvent} />);
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(mockEvent.competitors[0].name);
});

test('should show event away team name', () => {
	render(<EventPanel selectedEvent={mockEvent} />);
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(mockEvent.competitors[1].name);
});

test('should show event score', () => {
	const { scores } = mockEvent;
	const { home, away } = scores;
	render(<EventPanel selectedEvent={mockEvent} />);
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

	render(<EventPanel selectedEvent={mockEvent} />);
	const eventTable = screen.queryByTestId('selected-event');

	expect(eventTable).toBeInTheDocument();
	expect(eventTable).toHaveTextContent(renderStartTime());
});
