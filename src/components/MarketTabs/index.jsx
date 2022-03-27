import React, { useEffect, useCallback, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { Container, MarketBadge, BadgeGroup } from './marketTabs.styles';

import { useSocket } from '../../contexts/SocketProvider';

const MarketTabs = ({ eventId }) => {
	const [marketIds, setMarketIds] = useState([]);
	const [markets, setMarkets] = useState([]);
	const [active, setActive] = useState(0);

	const { socket } = useSocket();

	const handleClick = (idx) => {
		if (active === idx) {
			return setActive(null);
		}
		setActive(idx);
	};

	const onMessage = useCallback(
		(m) => {
			const data = JSON.parse(m.data);
			const { type } = data;
			switch (type) {
				case 'EVENT_DATA':
					setMarketIds(data.data.markets.slice(0, 10));
					break;
				case 'MARKET_DATA':
					setMarkets((prev) => [...prev, data.data]);
					break;
				default:
					break;
			}
		},
		[setMarkets]
	);

	useEffect(() => {
		if (!socket) return;
		socket.send(JSON.stringify({ type: 'getEvent', id: eventId }));

		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [eventId, socket, onMessage]);

	useEffect(() => {
		if (!socket) return;
		const query = (id) => JSON.stringify({ type: 'getMarket', id });
		marketIds.forEach((id) => socket.send(query(id)));

		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [marketIds, socket, onMessage]);

	return (
		<Container>
			<ScrollContainer vertical={false}>
				<BadgeGroup>
					{markets ? (
						markets.map((market, idx) => {
							return (
								<MarketBadge
									active={active}
									id={idx}
									onClick={() => handleClick(idx)}
									key={idx}
								>
									{market.name}
								</MarketBadge>
							);
						})
					) : (
						<p>Loading...</p>
					)}
				</BadgeGroup>
			</ScrollContainer>
			<p>{active}</p>
		</Container>
	);
};

export default MarketTabs;
