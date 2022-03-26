import React, { useEffect, useCallback, useState } from 'react';

import {
	MarketContainer,
	Outcome,
	OutcomeName,
	OutcomePrice,
	Tabs,
	Tab,
	Content,
} from './marketTabs.styles';

import { useSocket } from '../../contexts/SocketProvider';

const MarketTabs = ({ markets, oddsDisplay, displayOptions }) => {
	const [marketId] = markets;

	const [market, setMarket] = useState(undefined);
	const [outcome, setOutcome] = useState(undefined);
	const [active, setActive] = useState(0);

	const { socket } = useSocket();

	const onMessage = useCallback((m) => {
		const data = JSON.parse(m.data);
		const { type } = data;
		switch (type) {
			case 'MARKET_DATA':
				setMarket(data.data);
				break;
			case 'OUTCOME_DATA':
				setOutcome(data.data);
				break;
			default:
				break;
		}
	}, []);

	useEffect(() => {
		socket.send(JSON.stringify({ type: 'getMarket', id: marketId }));
		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [socket, marketId, onMessage]);

	useEffect(() => {
		if (!market) return;
		const { outcomes } = market;
		outcomes.forEach((id) => {
			socket.send(JSON.stringify({ type: 'getOutcome', id }));
		});
		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [socket, market, onMessage]);

	const tabHandler = (e) => {
		const index = parseInt(e.target.id, 0);
		if (index !== active) {
			setActive(index);
		}
	};

	const MarketRows = () => {
		return (
			<MarketContainer isMinimised>
				<Tabs>
					<Tab onClick={tabHandler} active={active === 0} id={0}>
						{market.name}
					</Tab>
				</Tabs>
				{outcome && <OutcomeRows />}
			</MarketContainer>
		);
	};

	const OutcomeRows = () => {
		const { name, price } = outcome;
		const { den, num, decimal } = price;
		return (
			<Content active={active === 0}>
				<Outcome>
					<OutcomeName>{name}</OutcomeName>
					<OutcomePrice>
						{oddsDisplay === displayOptions.DECIMAL
							? decimal
							: `${num} / ${den}`}
					</OutcomePrice>
				</Outcome>
			</Content>
		);
	};

	return <>{market ? <MarketRows /> : <p>Loading...</p>}</>;
};

export default MarketTabs;
