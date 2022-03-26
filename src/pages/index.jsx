import React from 'react';

import LiveEventTable from '../components/LiveEventTable';
import events from '../data/liveEvents.json';

const Home = () => {
	return <LiveEventTable events={events} />;
};

export default Home;
