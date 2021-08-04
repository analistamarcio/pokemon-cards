import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: 0;
	}

	html {
		@media (max-width: 1080px) {
			font-font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-font-size: 87.5%;

			.container-cards {
				grid-template-columns: 1fr;
			}
		}
	}

	body {
		font: 1.1em;
		width: 100vw;
		height: 100vh;
		color: ${theme.colors.foreground};
		background-color: ${theme.colors.background};
		-webkit-font-smoothing: antialiased;
	}
	
	body, input, textarea, button {
		font-family: 'Georama', sans-serif;
	}
	
	h1, h2, h3, h4, h5, h6, strong {
  	font-weight: 500;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	header {
		display: flex;
		justify-content: center;
		border-bottom: 2px solid black;
		color: ${theme.colors.title};
		height: 100px;
		background-color: ${theme.colors.red};
	}

	.header-logo {
		display: flex;
		justify-content: left;
		align-items: center;
		font-size: large;
		font-weight: 400;
		cursor: pointer;
	}

	header img {
		margin: 0 15px;
	}

	main {
		min-height: 80%;
		display: flex;
		justify-content: center;
	}

	footer {
		color: ${theme.colors.title};
		height: 5%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 5px;
		font-size: small;
		font-style: italic;
		margin-top: 20px;
		background-color: ${theme.colors.red};
	}

	a {
		text-decoration: none;
		padding: 5px;
	}

	a:visited {
		color: ${theme.colors.visited};
	}

	a:link {
		color: ${theme.colors.title};
	}

	a:hover {
		color: ${theme.colors.link};
	}

	.nav-links {
		width: 20%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		padding: 0;
		line-height: 3em;
		font-size: large;
	}

	.nav-links a {
		color: ${theme.colors.title};
	}

	.nav-links a:link {
		text-decoration: none;
		transform: translateZ(0);
		transition: transform 0.25s ease-out;
	}

	.nav-links a:hover {
		color: ${theme.colors.link};
		transform: scale(1.1);
	}

	.card{
		color: black;
		display:flex;
		flex-direction:column;
		background-color: white;
		border: 10px solid transparent;
		border-radius: 5px;
		min-height: 261px;
		padding: 1rem;
		-moz-osx-font-smoothing: grayscale;
		backface-visibility: hidden;
		transform: translateZ(0);
		transition: transform 0.25s ease-out;
		box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.8);
		-webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.8);
		-moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.8); 
	}

	.card:hover{
		transform: scale(1.05);
	}

	.card img{
		width: 160px;
		height: 180px;
		align-self: center;
	}

	.card h2,
	.card h3 {
		text-align: center;
		text-transform: capitalize;
	}

	.container-cards {
		width: 80vw;
		margin:0 auto;
		display: grid;
		grid-gap: 1.2rem;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.backCard-header {
		color: ${theme.colors.title};
		display: flex;
		justify-content: center;
		align-items: baseline;
		font-size: 1.5em;
	}

	.backCard-header span {
		padding-left: 10px;
		padding-bottom: 30px;
	}
	
	.backCard-content {
		display: flex;
		flex-direction: column;
		color: ${theme.colors.title};
		font-size: 1.3em;
	}
	
	.backCard-content div {
		padding-bottom: 20px;
	}

	.backCard-content span {
		padding-left: 10px;
		padding-bottom: 10px;
		color: ${theme.colors.titleContrast};
	}

	.detail-true {
		background-color: ${theme.colors.blue};
		min-height: 261px;
	}

	.container-search {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 40px;
		background-color: ${theme.colors.searchBar};
		padding: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

	input[type=text] {
		background-color: ${theme.colors.inputBgColor};
		-webkit-appearance: none;
		font-size: 1.6rem;
		border-radius: 5px;
		height: 40px;
		padding: 10px;
		text-align: center;
		border:none;
		outline:none;
	}
	
	.search input[type=text] {
		width: 72.8vw;
		margin-right: 0.8vw;
	}

	.limit input[type=text] {
		width: 3.6vw;
		margin-left: 0.8vw;
	}
`}
`
