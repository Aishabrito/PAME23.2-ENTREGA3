import React from 'react';
import { ButtonD, Info } from './styles';

function Pedidos({ nomeCliente, mesa, produto, valor, status }) {
  // Definir texto que aparecerá nos status
  const statusText = status === 'emProducao' ? 'Em produção' : 'Entregue';

  return (
    <ButtonD>
      <span>
        <Info>Nome do Cliente: {nomeCliente}</Info>
        <Info>Mesa: {mesa}</Info>
        <Info>Produto: {produto}</Info>
        <Info>Valor: {valor}</Info>
        <Info>Status: {statusText}</Info>
      </span>
    </ButtonD>
  );
}

export default Pedidos;
