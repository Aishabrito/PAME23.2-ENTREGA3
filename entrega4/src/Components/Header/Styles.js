import styled from "styled-components";
import { Colors } from '../../const'
import { Link } from "react-router-dom";


export const HeaderDiv = styled.div`
    top: 0;
    /* position: sticky; */
    display: flex;
    align-items: center;
    width: 100vw;
    height: 17vh;
    min-height: 100px;
    padding: 0;
    background-color: ${Colors.Laranja};
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        height: 12vh;
    }
`;

export const HeaderTitle = styled.div`
    margin-left: 2vw;
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 36vw;
    height: 100%;
    margin-left: 35vw;

    @media screen and (max-width: 768px) {
        width: 70vw;
        margin-left: 0;
        justify-content: space-around;
    }
`;



// ///

export const HeaderWrapper = styled.header`
    background-color: ${Colors.Laranja};
    color: black;
    padding: 20px 0;
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        display: ${props => (props.isOpen ? 'grid' : 'none')};
				
    }
`;

export  const NavLink = styled.button`
    color: black;
    text-decoration: none;
    margin-left: 20px;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        margin: 10px 0 ;
				margin-left: auto;
    }
`;

export const Burger = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const Line = styled.div`
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px;
    transition: all 0.3s ease;
`;