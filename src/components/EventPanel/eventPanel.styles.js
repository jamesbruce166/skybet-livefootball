import styled from 'styled-components';
import { Settings } from '@styled-icons/ionicons-sharp';
import { PRIMARY_RED } from '../../variables.styles';

export const Section = styled.div`
	background: ${PRIMARY_RED};
	min-height: 20vh;
	padding: 5%;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

export const GameBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;

export const TeamTextContainer = styled.div`
	display: flex;
`;

export const TeamText = styled.p`
	display: flex;
	flex: 1;
	justify-content: center;
	color: white;
	font-size: 22px;
	text-align: center;

	:first-child > span {
		margin-right: auto;
	}

	:last-child > span {
		margin-left: auto;
	}
`;

export const TimeLabel = styled.p`
	color: lightgray;
	font-size: 14px;
	text-align: center;
	text-transform: uppercase;
	line-height: 0;
`;

export const TimeStarted = styled.p`
	color: white;
	font-size: 16px;
	text-align: center;
	line-height: 0;
`;

export const EmptyDataText = styled.p`
	color: white;
	font-size: 20px;
	text-align: center;
	font-weight: 500;
`;

export const ControlBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const MenuIcon = styled(Settings)`
	color: lightgray;
	width: 25px;

	& :hover {
		cursor: pointer;
		color: #444444;
	}
`;
