import React, { useEffect, useCallback, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
	Container,
	MarketBadge,
	BadgeGroup,
	OutcomeGroup,
	OutcomeRow,
	OutcomeName,
	OutcomePrice,
} from './marketTabs.styles';

import { useSocket } from '../../contexts/SocketProvider';
import { useDisplaySettings } from '../../contexts/DisplaySettingsProvider';

const MarketTabs = ({ eventId, displayOptions }) => {
	const [marketIds, setMarketIds] = useState([]);
	const [outcomeIds, setOutcomeIds] = useState([]);
	const [outcomes, setOutcomes] = useState([]);
	const [markets, setMarkets] = useState([]);
	const [active, setActive] = useState(null);

	const { socket } = useSocket();

	const handleClick = (idx) => {
		setOutcomes([]);
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
				case 'OUTCOME_DATA':
					setOutcomes((prev) => [...prev, data.data]);
					break;
				default:
					break;
			}
		},
		[setMarkets, setOutcomes]
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

	useEffect(() => {
		if (!socket) return;
		const query = (id) => JSON.stringify({ type: 'getOutcome', id });
		outcomeIds.forEach((id) => socket.send(query(id)));

		socket.addEventListener('message', onMessage);
		return () => {
			socket.removeEventListener('message', onMessage);
		};
	}, [outcomeIds, socket, onMessage]);

	const Outcomes = () => {
		const { oddsDisplay } = useDisplaySettings();
		return (
			<OutcomeGroup>
				{outcomes
					? outcomes.map((outcome) => {
							const { price, name, outcomeId } = outcome;
							const { den, num, decimal } = price;
							return (
								<OutcomeRow key={outcomeId}>
									<OutcomeName>{name}</OutcomeName>
									<OutcomePrice>
										{oddsDisplay == displayOptions.DECIMAL
											? `${decimal}`
											: `${num}/${den}`}
									</OutcomePrice>
								</OutcomeRow>
							);
					  })
					: null}
			</OutcomeGroup>
		);
	};

	return (
		<Container>
			<ScrollContainer vertical={false}>
				<BadgeGroup>
					{markets ? (
						markets
							.sort(
								({ displayOrder: a }, { displayOrder: b }) =>
									a - b // ascending order
							)
							.map((market, idx) => {
								return (
									<MarketBadge
										active={active}
										id={idx}
										onClick={() => {
											handleClick(idx);
											setOutcomeIds(market.outcomes);
										}}
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
			<ScrollContainer horizontal={false}>
				<Outcomes />
			</ScrollContainer>
		</Container>
	);
};

export default MarketTabs;
