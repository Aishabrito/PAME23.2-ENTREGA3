import styled from 'styled-components';
import { Colors } from '../../const'


export const BackgroundLogin =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


export const LoginDiv = styled.div`

background-color: #ccc;
padding: 2rem;

`;



export const InputLogin = styled.input`
  width: 300px;
  border-radius: 0.5rem;
  height: 1.6rem;
  background-color: ${Colors.Laranja};
`;


export const ButtonLogin = styled.button`

width: 300px;
margin-top:1rem;

`;

export const SenhaInvalid = styled.p`
  color: red;
`;




