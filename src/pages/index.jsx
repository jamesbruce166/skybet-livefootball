import React from 'react';

import LiveEventTable from '../components/LiveEventTable';
import EventPanel from '../components/EventPanel';

import { SocketProvider } from '../contexts/SocketProvider';
import { EventProvider } from '../contexts/EventProvider';

const Home = () => {
	return (
		<SocketProvider>
			<EventProvider>
				<EventPanel />
				<LiveEventTable />
			</EventProvider>
		</SocketProvider>
	);
};

export default Home;
