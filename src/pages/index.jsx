import React from 'react';

import LiveEventTable from '../components/LiveEventTable';
import EventPanel from '../components/EventPanel';

import events from '../data/liveEvents.json';

const Home = () => {
	return (
		<>
			<EventPanel selectedEvent={events.data[0]} />
			<LiveEventTable events={events} />
		</>
	);
};

export default Home;
