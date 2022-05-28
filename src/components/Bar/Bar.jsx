import React from "react";
import { Wrapper, Title, Hist, Amount } from "./Bar.styles";

function Bar({ title, size, color, amount }) {
	return (
		<Wrapper>
			<Hist color={color} size={size} />
			<Amount className="amount">{`$${amount || ""}`}</Amount>
			<Title>{title}</Title>
		</Wrapper>
	);
}

export default Bar;
