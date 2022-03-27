import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
`;

export const BadgeGroup = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const MarketBadge = styled.button`
	border: none;
	border-radius: 5px;
	background: white;
	margin-right: 1rem;
	white-space: nowrap;
	padding: 0.3rem 0.7rem;
	border: 2px solid white;
	color: ${(props) => (props.active == props.id ? '#222' : 'white')};
	background: ${(props) =>
		props.active == props.id ? 'white' : 'transparent'};
`;

export const OutcomeContainer = styled.div`
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 0.5px solid #aaa;
	border-top: 0.5px solid #aaa;
	p {
		font-size: 0.9rem;
	}
`;
