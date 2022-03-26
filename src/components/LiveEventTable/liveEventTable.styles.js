import styled from 'styled-components';
import { SECONDARY_DARK } from '../../variables.styles';
import { Football } from '@styled-icons/ionicons-outline';

export const Section = styled.section`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	padding: 5%;
`;

export const Container = styled.div`
	width: 80%;
`;

export const EmptyTableCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	width: 100%;
	min-height: 30vh;
	background: ${SECONDARY_DARK};
`;

export const EmptyTableIcon = styled(Football)`
	color: lightgrey;
	width: 50px;
`;

export const EmptyTableMessage = styled.p`
	color: white;
	font-size: 20px;
	font-weight: 100;
	text-align: center;
`;
