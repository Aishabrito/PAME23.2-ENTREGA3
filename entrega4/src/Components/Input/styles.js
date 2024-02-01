import styled from "styled-components";

import { Colors } from "../../const";

export const InputDiv = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0.2em solid ${Colors.LaranjaEscuro}; 
    background: ${Colors.Laranja}; 
    padding: 0.85em 0.8em;
    color: #075e94;
    border-radius: 2em;
    width: 20vw;
    box-shadow: 2px 7px 10px ${Colors.Shadow};
    margin-top: 1rem;

    &:hover,
    &:focus {
        border: 0.2em solid ${Colors.Laranja};
        outline: none;
    }

    @media screen and (max-width: 1200px) {
        width: 90%; /* Ajusta a largura para ocupar 90% da largura da tela em telas menores que 768px */
        margin: 0.5rem auto; /* Centraliza o input na horizontal e adiciona um espaço vertical de 0.5rem */
    }
`;