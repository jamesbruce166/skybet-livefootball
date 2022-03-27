import React, {
	useContext,
	useState,
	useCallback,
	createContext,
	useEffect,
} from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { useSocket } from './SocketProvider';

export const EventsContext = createContext();

export function useEvents() {
	return useContext(EventsContext);
}

export function EventProvider({ children }) {
	const [selectedEvent, setSelectedEvent] = useState(undefined);
	const [events, setEvents] = useState(undefined);
	const handleError = useErrorHandler();

	const { socket } = useSocket();

	const onMessage = useCallback((m) => {
		const data = JSON.parse(m.data);
		const { type } = data;
		switch (type) {
			case 'LIVE_EVENTS_DATA':
				const firstGame = data.data && data.data[0];

				setEvents(data);
				setSelectedEvent(firstGame);
				break;
			case 'ERROR':
				handleError(data);
				break;
			default:
				break;
		}
	}, []);

	useEffect(() => {
		if (socket == null) return;

		socket.addEventListener('message', onMessage);

		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [socket, onMessage]);

	const value = {
		events,
		selectedEvent,
		setSelectedEvent,
	};

	return (
		<EventsContext.Provider value={value}>
			{children}
		</EventsContext.Provider>
	);
}
