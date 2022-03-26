import styled from 'styled-components';

export const MarketContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	margin-top: 10px;
	transition: 0.3s ease-in-out;
`;

export const Outcome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const OutcomeName = styled.p`
	color: lightgray;
	font-size: 16px;
	text-align: center;
	text-transform: uppercase;
	line-height: 0;
`;

export const OutcomePrice = styled.p`
	color: white;
	font-size: 14px;
	text-align: center;
`;

export const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 0 30px;
	overflow: hidden;
	background: transparent;
	height: 3em;
	margin-top: 20px;
`;

export const Tab = styled.button`
	cursor: pointer;
	position: relative;
	background: transparent;
	color: lightgray;

	margin: 0.3em;
	font-size: 0.9em;
	border: none;
	transition: 0.3s ease-in-out;

	${(props) => (props.active ? 'font-size: 1rem;' : '')}
	${(props) => (props.active ? 'margin: 0 0.6rem;' : '')}
${(props) => (props.active ? 'color: white;' : '')}
`;

export const Content = styled.div`
	${(props) => (props.active ? 'display: flex;' : 'display:none;')}
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;
