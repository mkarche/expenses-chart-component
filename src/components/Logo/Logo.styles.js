import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
`;

export const Left = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid white;
	background-color: none;
	z-index: 2;
`;

export const Right = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid black;
	background-color: black;
	position: relative;
	left: -11px;
`;
