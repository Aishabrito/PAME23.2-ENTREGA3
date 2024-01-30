import React from "react";
import { HeaderDiv, HeaderTitle, Menu } from "./Styles";
import { GlobalStyle } from "../../const";
import Button from "../Button";

function Header({ title }) {
	return (
		<>
			<HeaderDiv>
				<HeaderTitle>Delícias Salgadas </HeaderTitle>
				<Menu>
					<Button title={"Home"} routes="/Home"></Button>
                    <Button title={"Novos Pedidos "} routes="/NovosPedidos"></Button>
					<Button title={"Acompanhar Pedidos"} routes="/AcompanharPedidos"></Button>
					<Button title={"Categorias"} routes="/Categorias"></Button>
				</Menu>
			</HeaderDiv>
		</>
	);
}

export default Header;
