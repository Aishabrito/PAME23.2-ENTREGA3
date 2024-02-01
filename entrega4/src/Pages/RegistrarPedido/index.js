import React, { useState } from "react";
import { Body, ButtonDiv, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


function NovosPedidos({ onPedidoRegistrado }) {
  const [nomeCliente, setNomeCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em produção");

  const registrarPedido = () => {
    const novoPedido = {
      nomeCliente,
      mesa,
      produto,
      valor,
      status,
    };
    // Chamamos a função fornecida por propriedade para adicionar o pedido à lista
    onPedidoRegistrado(novoPedido);
    setNomeCliente("");
    setMesa("");
    setProduto("");
    setValor("");
    setStatus("Em produção");
    alert("Pedido registrado com sucesso!");
  };

  return (
    <Pages>
      <Header isntLogin={true}></Header>
      <Body>
        <Container>
          <h1>Registrar Novo Pedido</h1>
          <Input
  placeholder="Nome do Cliente..."
  setvariavel={setNomeCliente}
  value={nomeCliente}
/>
<Input
  placeholder="Mesa..."
  setvariavel={setMesa}
  value={mesa}
/>
<Input
  placeholder="Produto..."
  setvariavel={setProduto}
  value={produto}
/>
<Input
  placeholder="Valor..."
  setvariavel={setValor}
  value={valor}
/>

          <h2>Status: {status}</h2>
          <ButtonDiv>
            <Button
              text="Em produção"
              funclick={() => setStatus("Em produção")}
            />
            <Button
              text="Entregue"
              funclick={() => setStatus("Entregue")}
            />
          </ButtonDiv>
          <StyledLink to="/AcompanharPedidos">
            <Button text="Registrar Pedido" funclick={registrarPedido} />
          </StyledLink>
        </Container>
      </Body>
    </Pages>
  );
}

export default NovosPedidos;
