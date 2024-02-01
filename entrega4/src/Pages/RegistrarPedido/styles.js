import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #e1b382;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: white;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: none;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    text-decoration: underline;
    font-size: 26px;
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
