import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import AcompanharPedidos from './Pages/AcompanharPedidos';
import NovoPedidos from "./Pages/novosPedidos";
import Login from "./Pages/Login";
import Cadastro from './Pages/cadastro';
import RegistrarPedido from './Pages/RegistrarPedido'; // Importe o componente RegistrarPedido

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
  {
    path: "/AcompanharPedidos",
    element: <AcompanharPedidos />,
  },

  {
    path: "/NovosPedidos",
    element: <NovoPedidos />,
  },
  {
    path: "/RegistrarPedido", // Adicione a rota para RegistrarPedido
    element: <RegistrarPedido />,
  },
]);

export function MainRoutes() {
  return (
    <RouterProvider router={Router} />
  )
}
