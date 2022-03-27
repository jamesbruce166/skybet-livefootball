import React, { useEffect, useCallback, useState } from 'react';

import { Wrap, Dropdown, PlusIcon, MinusIcon } from './marketAccordion.styles';

import { useSocket } from '../../contexts/SocketProvider';

const MarketAccordion = ({ marketIds }) => {
	const [markets, setMarkets] = useState([]);
	const [active, setActive] = useState(0);

	const { socket } = useSocket();

	const handleClick = (idx) => {
		if (active === idx) {
			return setActive(null);
		}
		setActive(idx);
	};

	const onMessage = useCallback((m) => {
		const data = JSON.parse(m.data);
		const { type } = data;
		switch (type) {
			case 'MARKET_DATA':
				setMarkets([...markets, data.data]);
				break;
			default:
				break;
		}
	}, []);

	useEffect(() => {
		if (!socket) return;
		const query = (id) => JSON.stringify({ type: 'getMarket', id });
		marketIds.forEach((id) => socket.send(query(id)));

		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [marketIds, socket]);

	const MarketRows = () => {
		return markets.map((market, idx) => {
			return (
				<>
					<Wrap onClick={() => handleClick(idx)} key={idx}>
						<p>{market.name}</p>
						<span>
							{active === idx ? <MinusIcon /> : <PlusIcon />}
						</span>
					</Wrap>
					{active === idx ? (
						<Dropdown>
							<p>this is a test...</p>
						</Dropdown>
					) : null}
				</>
			);
		});
	};

	return <>{markets ? <MarketRows /> : <p>Loading...</p>}</>;
};

export default MarketAccordion;
