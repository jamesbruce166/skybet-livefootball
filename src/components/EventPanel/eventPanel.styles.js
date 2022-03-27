import styled, { css } from 'styled-components';

import { Settings } from '@styled-icons/ionicons-sharp';
import { Expand } from '@styled-icons/evaicons-solid';
import { CloseFullscreen } from '@styled-icons/material-rounded';

import { PRIMARY_RED } from '../../variables.styles';

export const Section = styled.div`
	background: ${PRIMARY_RED};
	min-height: 20vh;
	padding: 3%;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

export const LinkedEventTypeName = styled.h2`
	color: white;
	font-size: 1.2rem;
	font-weight: 600;
	line-height: 0;
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
	font-size: 1.6rem;
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
	font-size: 0.8rem;
	text-align: center;
	text-transform: uppercase;
	line-height: 0;
`;

export const TimeStarted = styled.p`
	color: white;
	font-size: 1rem;
	text-align: center;
	line-height: 0;
`;

export const EmptyDataText = styled.p`
	color: white;
	font-size: 1.2rem;
	text-align: center;
	font-weight: 500;
`;

export const ControlBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ControlBarRight = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ControlBarLeft = styled.div``;

const Icon = css`
	color: white;

	& :hover {
		cursor: pointer;
		color: #444444;
	}
`;

export const MenuIcon = styled(Settings)`
	${Icon}
	width: 25px;
`;

export const MinimiseIcon = styled(Expand)`
	${Icon}
	width: 30px;
`;

export const MaximiseIcon = styled(CloseFullscreen)`
	${Icon}
	width: 30px;
`;

export const Clickable = styled.button`
	background: transparent;
	border: none;
`;
