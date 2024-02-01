import styled from "styled-components";
import { Colors } from "../../const";
import imagem from "../../Assets/imagemfundohome.jpg";
import salgados from "../../Assets/salgados.jpg"


export const Background = styled.div`


  display:flex ;
  align-items: center;
  justify-content: center;
  background-image: url(${salgados} );
  background-repeat: no-repeat ;



  width: 100%; /* largura da tela */
  height: 100vh; /* altura da tela */
  background-size: cover; /* Ajusta a imagem para cobrir todo o elemento */
  background-position: center; /* Centraliza a imagem */
  /* Outros estilos que você deseja aplicar */

`;



export const IMG = styled.img`
 width: 100vw;

 border-radius: 25px;
`;

