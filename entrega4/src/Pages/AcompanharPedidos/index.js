import React, { useState, useEffect } from "react";
import { Body, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import PedidosC from "../../Components/PedidosC";

function Pedidos({ inforegistro }) {
  const [listaPedidos, setListaPedidos] = useState([
    { cliente: "Renata Vasconcelos", mesa: "Mesa 3", produto: "Empadão de Camarão", valor: "R$12,00", status: "Em produção" },
    { cliente: "João Silva", mesa: "Mesa 1", produto: "Pizza Margherita", valor: "R$25,00", status: "Entregue" },
  ]);

  // Adicionando o pedido à lista de pedidos usando useEffect para garantir que a lista seja atualizada após a renderização
  useEffect(() => {
    if (inforegistro) {
      setListaPedidos((prevPedidos) => [...prevPedidos, inforegistro]);
    }
  }, [inforegistro]);

  return (
    <Pages>
      <Header isntLogin={true}></Header>
      <Body>
        <Container>
          <h1>Acompanhar Pedidos</h1>
          {listaPedidos.map((pedido, index) => (
            <PedidosC key={index} pedido={pedido}></PedidosC>
          ))}
          <StyledLink to="/RegistrarPedido">
            <button>Registrar Pedido</button>
          </StyledLink>
        </Container>
      </Body>
    </Pages>
  );
}

export default Pedidos;
