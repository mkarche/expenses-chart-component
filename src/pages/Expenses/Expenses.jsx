import React from "react";
import customData from "../../data.json";
//import { css } from "styled-components";
import { Bar, Footer, Heading } from "../../components";
import {
	Amount,
	Bottom,
	Container,
	Content,
	Graph,
	GraphTitle,
	Left,
	Line,
	Percentage,
	Right,
	Spacer,
	Text,
	Wrapper,
} from "./Expenses.styles";

function Expenses() {
	const day = new Date().getDay();

	return (
		<Container>
			<Wrapper>
				<Heading />
				<Spacer />
				<Content>
					<GraphTitle>Spending - Last 7 days</GraphTitle>
					<Graph>
						{customData.map((data, index) =>
							day === (index + 1) % 7 ? (
								<Bar
									key={data.day}
									title={data.day}
									size={`${data.amount * 3}px`}
									color="var(--color-primary-cyan)"
								/>
							) : (
								<Bar
									key={data.day}
									title={data.day}
									size={`${data.amount * 3}px`}
									color="var(--color-primary-red)"
								/>
							)
						)}
					</Graph>
					<Line />
					<Bottom>
						<Left>
							<Text>Total this month </Text>
							<Amount>$478.33</Amount>
						</Left>
						<Right>
							<Percentage>+2.4%</Percentage>
							<Text>from last month</Text>
						</Right>
					</Bottom>
				</Content>
				<Footer />
			</Wrapper>
		</Container>
	);
}

export default Expenses;
