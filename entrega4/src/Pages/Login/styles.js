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
border-radius:20px;
padding: 2rem;

`;



export const InputLogin = styled.input`
  width: 300px;
  border-radius: 0.5rem;
  height: 1.6rem;
  background-color: white;
`;


export const ButtonLogin = styled.button`

width: 300px;
margin-top:1rem;

`;

export const SenhaInvalid = styled.p`
  color: red;
`;




