import React from 'react';

import LiveEventTable from '../components/LiveEventTable';
import EventPanel from '../components/EventPanel';

import { DisplaySettingsProvider } from '../contexts/DisplaySettingsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import { EventProvider } from '../contexts/EventProvider';

const Home = () => {
	return (
		<DisplaySettingsProvider>
			<SocketProvider>
				<EventProvider>
					<EventPanel />
					<LiveEventTable />
				</EventProvider>
			</SocketProvider>
		</DisplaySettingsProvider>
	);
};

export default Home;
