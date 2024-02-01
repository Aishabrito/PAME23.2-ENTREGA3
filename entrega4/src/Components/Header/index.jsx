import React, { useState } from "react";


import { Burger, Container, HeaderWrapper, Line, Logo, Nav } from "./Styles"


import { ButtonAP } from "../Button";

function Header({ title }) {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<HeaderWrapper>
				<Container>
					<Logo>Delícias Salgadas</Logo>
					<Nav isOpen={isOpen}>
						<ButtonAP title={"Home"} routes="/Home"></ButtonAP>
						<ButtonAP title={"Mesas "} routes="/NovosPedidos"></ButtonAP>
						<ButtonAP title={"Pedidos"} routes="/AcompanharPedidos"></ButtonAP>
						<ButtonAP title={"Produtos"} routes="/Categorias"></ButtonAP>
					</Nav>
					<Burger onClick={toggleMenu}>
						<Line className={isOpen ? 'line1 toggle' : 'line1'}></Line>
						<Line className={isOpen ? 'line2 toggle' : 'line2'}></Line>
						<Line className={isOpen ? 'line3 toggle' : 'line3'}></Line>
					</Burger>
				</Container>
			</HeaderWrapper>

		</>
	);
}

export default Header;
