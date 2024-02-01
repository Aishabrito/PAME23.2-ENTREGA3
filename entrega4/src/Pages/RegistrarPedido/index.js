import React, { useState } from "react";
import { Body, ButtonDiv, Container, Pages } from "./styles";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function NovosPedidos() {
  // Variáveis para adicionar um novo pedido
  const [nomeCliente, setNomeCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em produção");

  // Lista de pedidos
  const [listaPedidos, setListaPedidos] = useState([]);

  // Função para registrar um novo pedido
  const registrarPedido = () => {
    const novoPedido = {
      nomeCliente,
      mesa,
      produto,
      valor,
      status,
    };
    setListaPedidos([...listaPedidos, novoPedido]);
    // Limpar os campos após o registro
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
          <Link to="/AcompanharPedidos">
            <Button text="Registrar Pedido" funclick={registrarPedido} />
          </Link>
        </Container>
      </Body>
    </Pages>
  );
}

export default NovosPedidos;
