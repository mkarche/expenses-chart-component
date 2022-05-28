import styled from "styled-components";
import { css } from "styled-components";
import { mobile, tablet } from "../../utilities/responsive";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Amount = styled.div`
	background-color: var(--color-dark-brown);
	color: white;
	font-size: 12px;
	font-weight: 400;
	opacity: 0;
	order: -1;
	margin-bottom: 0.2rem;
	padding: 0.2rem;
	border-radius: 5px;
`;

export const Hist = styled.div`
	width: 2.5rem;
	height: ${(props) => props.size};
	background-color: ${(props) => props.color || css`var(--color-primary-red)`};
	border-radius: 3px;
	cursor: pointer;
	${tablet({
		width: "5rem",
	})};

	${mobile({
		width: "3rem",
	})};

	&:hover {
		opacity: 0.5;
		transition: 0.5s ease-out;
	}

	&:hover + div {
		opacity: 1;
		transition: 1s ease-out;
	}
`;

export const Title = styled.p`
	margin: 0;
	font-size: 12px;
	color: var(--color-medium-brown);
`;
