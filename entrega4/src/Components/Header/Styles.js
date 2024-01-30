import styled from "styled-components";


export const HeaderDiv = styled.div`
	top: 0;
	position: sticky;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 17vh;
	min-height: 100px;
	padding: 0;
`;

export const HeaderTitle = styled.div`
	margin-left: 2vw;
	text-align: center;
	font-size: 24px;
	font-family: sans-serif;
	text-transform: uppercase;
	font-weight: bold;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 36vw;
	height: 100%;
	margin-left: 35vw;
`;
