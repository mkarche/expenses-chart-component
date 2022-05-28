import { css } from "styled-components";

export function mobile(props) {
	return css`
		@media only screen and (max-width: 768px) {
			${props}
		}
	`;
}

export function tablet(props) {
	return css`
		@media only screen and (max-width: 992px) {
			${props}
		}
	`;
}
