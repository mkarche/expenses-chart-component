import React from "react";
import { Wrapper, Title, Hist } from "./Bar.styles";

function Bar({ title, size, color }) {
	return (
		<Wrapper>
			<Hist color={color} size={size} />
			<Title>{title}</Title>
		</Wrapper>
	);
}

export default Bar;
