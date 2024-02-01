import React, { useState } from "react";
import { Body, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import PedidosC from "../../Components/PedidosC"; // Certifique-se de substituir com o nome correto do seu componente

function Pedidos({ inforegistro }) {
  // Armazenamos os pedidos em um estado usando useState
  const [listaPedidos, setListaPedidos] = useState([
    { cliente: "Renata Vasconcelos", mesa: "Mesa 3", produto: "Empadão de Camarão", valor: "R$12,00", status: "Em produção" },
    { cliente: "João Silva", mesa: "Mesa 1", produto: "Pizza Margherita", valor: "R$25,00", status: "Entregue" },
    
  ]);

  console.log(inforegistro);
  // Adicionando o pedido à lista de pedidos, caso tenha recebido um pedido da página de registro
  if (inforegistro != null) {
    setListaPedidos([...listaPedidos, inforegistro]);
  }

  return (
    <Pages>
      <Header isntLogin={true}></Header>
      <Body>
        <Container>
          <h1>Acompanhar Pedidos</h1>
           {/* Mapeando a lista de pedidos e renderizando cada pedido usando o componente PedidosC */}
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
