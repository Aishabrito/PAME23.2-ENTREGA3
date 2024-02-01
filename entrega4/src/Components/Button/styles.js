import styled from "styled-components";
import { Colors } from "../../const";

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
