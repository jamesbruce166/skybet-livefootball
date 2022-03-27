import React from 'react';

import LiveEventTableCell from '../LiveEventTableCell';
import {
	Section,
	Container,
	EmptyTableIcon,
	EmptyTableCard,
	EmptyTableMessage,
	EventTypeTitle,
} from './liveEventTable.styles';

import displayData from './data.json';

import { useEvents } from '../../contexts/EventProvider';

const LiveEventsTable = () => {
	const { events } = useEvents();

	const LiveEventsRows = () => {
		const { data } = events;
		const groups = data.reduce(
			(groups, event) => ({
				...groups,
				[event.linkedEventTypeName ?? event.typeName]: [
					...(groups[event.linkedEventTypeName ?? event.typeName] ||
						[]),
					event,
				],
			}),
			{}
		);

		const eventTypes = Object.keys(groups);
		return eventTypes.map((type, idx) => {
			return (
				<div key={idx}>
					<EventTypeTitle key={idx}>{type}</EventTypeTitle>
					{groups[type]
						.filter((e) => e.status.displayable)
						.map((event) => {
							const { eventId } = event;
							return (
								<LiveEventTableCell
									key={eventId}
									event={event}
								/>
							);
						})}
				</div>
			);
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
				{events && events.data?.length > 0 ? (
					<LiveEventsRows />
				) : (
					<EmptyTable />
				)}
			</Container>
		</Section>
	);
};

export default LiveEventsTable;
