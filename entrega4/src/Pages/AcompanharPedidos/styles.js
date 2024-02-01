import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../const";
import { Background } from "../Home/styles";

export const Pages = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.Bege};
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
    color: ${Colors.Laranja};
    text-decoration: none ;
    font-size: 26px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10vh;
`;
