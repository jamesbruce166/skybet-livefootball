import styled, { css } from 'styled-components';

const BaseBadge = css`
	border-radius: 5px;
	padding: 3px 5px;
	letter-spacing: 2px;
	font-weight: 600;
	font-size: 10px;
	color: white;
`;

export const LiveBadge = styled.div`
	${BaseBadge}
	background-color: rgb(255, 30, 60);
`;

export const FinishedBadge = styled.div`
	${BaseBadge}
	background-color: rgb(192,192,192);
`;

export const SuspendedBadge = styled.div`
	${BaseBadge}
	background-color: rgb(255,215,0);
`;
