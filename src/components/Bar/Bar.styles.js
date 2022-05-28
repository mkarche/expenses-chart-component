import styled from "styled-components";
import { css } from "styled-components";
import { mobile, tablet } from "../../utilities/responsive";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Hist = styled.div`
	width: 2.5rem;
	height: ${(props) => props.size};
	background-color: ${(props) => props.color || css`var(--color-primary-red)`};
	border-radius: 3px;
	${tablet({
		width: "5rem",
	})};

	${mobile({
		width: "3rem",
	})};
`;

export const Title = styled.p`
	margin: 0;
	font-size: 12px;
`;
