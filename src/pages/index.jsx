import React from 'react';

import LiveEventTableCell from '../components/LiveEventTableCell';
import events from '../data/liveEvents.json';

const Home = () => {
	const LiveEventCells = () => {
		return events.data.map((event, idx) => {
			<LiveEventTableCell event={event} key={idx} />;
		});
	};

	return <LiveEventCells />;
};

export default Home;
