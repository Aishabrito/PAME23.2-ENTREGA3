import styled from "styled-components";
import { Colors } from "../../const";

export const ButtonD = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    min-width: 60px;
    height: 10vh;
    background-color: ${Colors.Laranja};
    border: solid #2d545e 3px;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s ease; // Adiciona uma transição suave no hover

    @media (max-width: 500px) {
        min-height: 120px;
    }

    span {
        color: ${Colors.white};
    }

    &:hover {
        background-color: ${Colors.LaranjaClaro};
    }
`;

export const Info = styled.p`
    display: inline;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    padding-right: 1vw;
    padding-left: 1vw;

    @media (max-width: 768px) {
        font-size: 15px;
        align-items: center;
        display: block;
    }
`;
