import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcompanharPedidos from "../Pages/AcompanharPedidos";
import Home from "../Pages/Home";
import NovosPedidos from "../Pages/novosPedidos";

function Rotas() {
	return (
		<Router>
			<Routes>
                <Route path="/Home" element={<Home />} />
				<Route path="/AcompanharPedidos" element={< AcompanharPedidos />} />
				<Route path="/Novos Pedidos" element={<NovosPedidos />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default Rotas;
