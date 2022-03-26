import React, {
	useContext,
	useState,
	useCallback,
	createContext,
	useEffect,
} from 'react';
import { useSocket } from './SocketProvider';

const EventsContext = createContext();

export function useEvents() {
	return useContext(EventsContext);
}

export function EventProvider({ children }) {
	const [selectedEvent, setSelectedEvent] = useState(undefined);
	const [events, setEvents] = useState(undefined);
	const [error, setError] = useState(undefined);

	const { socket } = useSocket();

	const onMessage = useCallback((m) => {
		const data = JSON.parse(m.data);
		const { type } = data;
		switch (type) {
			case 'LIVE_EVENTS_DATA':
				setEvents(data);
				break;
			case 'ERROR':
				setError(data);
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
		error,
		selectedEvent,
		setSelectedEvent,
	};

	return (
		<EventsContext.Provider value={value}>
			{children}
		</EventsContext.Provider>
	);
}
