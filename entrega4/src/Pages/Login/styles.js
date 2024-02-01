import styled from 'styled-components';
import { Colors } from '../../const'

export const BackgroundLogin =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:${Colors.Bege}
`;

export const LoginDiv = styled.div`
  background-color: ${Colors.Laranja};
  border-radius: 20px;
  height:40vh;
  padding: 3rem; /* Aumente o padding conforme necessário */
`;

export const InputLogin = styled.input`
  width: 300px;
  border-radius: 0.5rem;
  height: 5vh;
  background-color: white;
`;

export const ButtonLogin = styled.button`
  width: 310px;
  height:5vh;
  margin-top: 1rem;
  border-radius: 0.5rem
`;

export const SenhaInvalid = styled.p`
  color: red;
`;



