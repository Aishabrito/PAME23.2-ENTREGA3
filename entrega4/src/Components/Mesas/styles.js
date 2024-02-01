import styled from 'styled-components';
import { Colors } from '../../const';

export const MesasContainer = styled.div`
  background-color: ${Colors.Laranja};
  padding: 20px;
  border-radius: 10px;
  margin: 30px auto; /* Centralizando o container na horizontal e aplicando margem superior e inferior */
  max-width: 400px; /* Definindo a largura máxima */

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  button {
    background-color: ${(props) => (props.isClicked ? 'red' : '#4caf50')};
    color: white;
    padding: 8px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
      background-color: ${(props) => (props.isClicked ? 'red' : '#45a049')};
    }
  }
`;
