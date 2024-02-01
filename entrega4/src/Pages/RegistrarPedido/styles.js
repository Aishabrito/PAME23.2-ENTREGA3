import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../const";

export const Pages = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: beige;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: none;
  flex-direction: column;
  align-items: center;

  h1 {
    color: black;
    font-size: 26px;
    margin-top:20vh;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
