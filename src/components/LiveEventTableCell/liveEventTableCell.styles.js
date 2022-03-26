import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap';
import { SECONDARY_DARK } from '../../variables.styles';

export const CellContent = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 10px 25px;
	background: ${SECONDARY_DARK};
	margin-top: 12px;
	border-radius: 8px;
`;

export const CompetitorBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
`;

export const SubRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const TeamNameText = styled.p`
	color: #ffffff;
	font-size: 0.9rem;
	font-weight: 300;
	line-height: 0;
	letter-spacing: 1px;
`;

export const ScoreText = styled.p`
	color: rgb(255, 30, 60);
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 0;
`;

export const StatusBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 39%;
	gap: 15px;
`;

export const Chevron = styled(ChevronRight)`
	color: lightgray;
	width: 18px;
`;
