import { createGlobalStyle } from "styled-components";
import { Words } from "./customComponents";
import { Word } from "../pages/Introduce/Holter/holterStyle";

const sizes = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
};

const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
  box-sizing: border-box;
  border-collapse: collapse;
  text-decoration: none;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul, li {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}


table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    outline: none;
  }

textarea:focus{
	outline: none;
}
`;
