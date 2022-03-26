import React from 'react';

import LiveEventTableCell from '../LiveEventTableCell';
import {
	Section,
	Container,
	EmptyTableIcon,
	EmptyTableCard,
	EmptyTableMessage,
} from './liveEventTable.styles';

import displayData from './data.json';

const LiveEventsTable = ({ events }) => {
	const { data } = events;

	const LiveEventsRows = () => {
		return data
			.filter((e) => e.status.displayable)
			.map((event) => {
				const { eventId } = event;
				return <LiveEventTableCell key={eventId} event={event} />;
			});
	};

	const EmptyTable = () => {
		return (
			<EmptyTableCard>
				<EmptyTableIcon />
				<EmptyTableMessage>
					{displayData['empty-table-message']}
				</EmptyTableMessage>
			</EmptyTableCard>
		);
	};

	return (
		<Section data-testid='event-table'>
			<Container>
				{data.length > 1 ? <LiveEventsRows /> : <EmptyTable />}
			</Container>
		</Section>
	);
};

export default LiveEventsTable;
