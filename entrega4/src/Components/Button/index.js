import React from "react";
import { StyledButtonH, StyledButtonNP, StyledButtonAP, StyledButtonC } from "./styles";
import { GlobalStyle } from "../../const/index";
import { Link } from "react-router-dom";

function ButtonH(props) {
  return (
    <>
      <StyledButtonH>
        <Link to={props.routes}>{props.title}</Link>
      </StyledButtonH>
    </>
  );
}

function ButtonNP(props) {
  return (
    <>
      <StyledButtonNP>
        <Link to={props.routes}>{props.title}</Link>
      </StyledButtonNP>
    </>
  );
}

function ButtonAP(props) {
  return (
    <>
      <StyledButtonAP>
        <Link to={props.routes}>{props.title}</Link>
      </StyledButtonAP>
    </>
  );
}

function ButtonC(props) {
  return (
    <>
      <StyledButtonC>
        <Link to={props.routes}>{props.title}</Link>
      </StyledButtonC>
    </>
  );
}

export { ButtonH, ButtonNP, ButtonAP, ButtonC };
