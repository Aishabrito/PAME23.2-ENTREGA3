// styles.js
import styled from "styled-components";
import { Colors } from "../../const";
import salgados from "../../Assets/salgados.jpg";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${salgados});
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  /* Adicione estilos para o container principal */
  /* Pode ser necessário ajustar os estilos conforme necessário */
`;

export const Title = styled.h1`
  color: ${Colors.Branco};
  font-size: 3em;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
