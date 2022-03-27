import styled from 'styled-components';
import { Minus, Plus } from '@styled-icons/boxicons-regular/';

export const Wrap = styled.div`
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	text-align: center;
	cursor: pointer;

	p {
		font-size: 1rem;
	}

	span {
		margin-right: 1.5rem;
	}
`;

export const Dropdown = styled.div`
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

export const PlusIcon = styled(Plus)`
	color: #00ffb9;
	size: 25px;
`;

export const MinusIcon = styled(Minus)`
	color: #00ffb9;
	size: 25px;
`;
