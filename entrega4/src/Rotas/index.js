import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcompanharPedidos from "../Pages/AcompanharPedidos";
import Home from "../Pages/Home";
import Categorias from "../Pages/Categorias";
import NovosPedidos from "../Pages/NovosPedidos";

function Rotas() {
	return (
		<Router>
			<Routes>
                <Route path="/Home" element={<Home />} />
				<Route path="/AcompanharPedidos" element={< AcompanharPedidos />} />
				<Route path="/Categorias" element={<Categorias />} />
				<Route path="/Novos Pedidos" element={<NovosPedidos />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default Rotas;
