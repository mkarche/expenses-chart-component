import styled from "styled-components";
import { mobile, tablet } from "../../utilities/responsive";

export const Container = styled.div`
	background-color: var(--bg-color-default);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 22rem;

	${tablet({
		width: "90%",
	})};

	${mobile({
		width: "90%",
	})};
`;

export const Spacer = styled.div`
	margin: 0.5rem 0;
`;

export const Content = styled.div`
	//border: 1px solid blue;
	background-color: white;
	border-radius: 10px;
	padding: 1rem;
`;

export const GraphTitle = styled.h1`
	font-size: 24px;
	margin-bottom: 48px;
`;

export const Graph = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

export const Line = styled.hr`
	border: 0.5px solid lightgray;
	margin: 1rem 0;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Left = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled.p`
	font-size: 12px;
	margin: 0;
`;

export const Amount = styled.h1`
	font-size: 32px;
	margin: 0;
`;

export const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
`;

export const Percentage = styled.p`
	font-size: 14px;
	font-weight: 700;
	margin: 0;
`;
