import React from "react";
import { Left, Title, Subtitle, Right, Wrapper } from "./Heading.styles";
import Logo from "../Logo/Logo";

function Heading() {
	return (
		<Wrapper>
			<Left>
				<Title>My Balance</Title>
				<Subtitle>$ 921.48</Subtitle>
			</Left>
			<Right>
				<Logo></Logo>
			</Right>
		</Wrapper>
	);
}

export default Heading;
