import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import AcompanharPedidos from './Pages/AcompanharPedidos';
// import  from './Pages/Home'
import Categorias from './Pages/categorias';
import NovoPedidos from "./Pages/novosPedidos";
import Login from "./Pages/Login";
import Cadastro from './Pages/cadastro'

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
    path: "/Categorias",
    element: <Categorias />,
  },
  {
    path: "/NovosPedidos",
    element: <NovoPedidos />,
  },
]);



export function MainRoutes() {
  return (
    <RouterProvider router={Router} />
  )
}