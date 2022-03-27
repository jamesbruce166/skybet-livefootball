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

export const OutcomeGroup = styled.div`
	max-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem 6rem;
`;

export const OutcomeRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const OutcomeName = styled.p`
	color: white;
	font-size: 1rem;
	font-weight: 500;
`;

export const OutcomePrice = styled.p`
	color: white;
	font-size: 1rem;
	font-weight: 700;
`;
