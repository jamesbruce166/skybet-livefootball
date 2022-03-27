import React, { useContext, useEffect, useState, useRef } from 'react';

const SocketContext = React.createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
	const [socket, setSocket] = useState();
	const ws = useRef(null);

	useEffect(() => {
		ws.current = new WebSocket(process.env.REACT_APP_SOCKET_URL);

		ws.current.addEventListener('open', () => {
			ws.current.send(
				JSON.stringify({
					type: 'getLiveEvents',
					primaryMarkets: true,
				})
			);
		});
		setSocket(ws.current);
	}, [id]);

	const value = {
		socket,
	};

	return (
		<SocketContext.Provider value={value}>
			{children}
		</SocketContext.Provider>
	);
}
