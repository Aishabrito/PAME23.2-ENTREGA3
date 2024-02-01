import styled from "styled-components";
import { Colors } from "../../const";

export const ButtonD = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    min-width: 85px;
    height: 5vh;
    background-color: ${Colors.LaranjaClaro};
    border: solid #2d545e 3px;
    border-radius: 5px;
    font-size: 13px;

    @media (max-width: 550px) {
        min-width: 60px;
        font-size: 10px;
    }

    cursor: pointer;

    span {
        color: #2d545e;
    }

    &:hover {
        background-color: #e1b382;
    }
`
// Botão Padrão
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${Colors.LaranjaClaro};
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0.5rem;
  border-radius: 0.2rem;
  a {
  color: black;
  text-decoration: none;
}
`;

// Botão H Style
export const StyledButtonH = styled(StyledButton)`
  // Adicionar estilos específicos para o botão H aqui
`;

// Botão NP Style
export const StyledButtonNP = styled(StyledButton)`
  // Adicionar estilos específicos para o botão NP aqui
`;

// Botão AP Style
export const StyledButtonAP = styled(StyledButton)`
   color: black;
    text-decoration: none;
    margin-left: 20px;
    white-space: nowrap;

    &:hover {
        text-decoration: none;
        background-color:${Colors.LaranjaEscuro}
    }

    @media screen and (max-width: 768px) {
        margin: 10px 0 ;
				margin-left: 0.2rem;
    }
`;

// Botão C Style
export const StyledButtonC = styled(StyledButton)`
  // Adicionar estilos específicos para o botão C aqui
`;
