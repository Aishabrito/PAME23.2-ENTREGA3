import React from 'react';
import { ButtonD, Info } from './styles';

function Pedidos({ nomeCliente, mesa, produto, valor, status }) {
  // Definir texto que aparecerá nos status
  const statusText = status === 'emProducao' ? 'Em produção' : 'Entregue';

  return (
    <ButtonD>
      <span>
        <Info>Nome do Cliente: Renata Vasconcelos {nomeCliente}</Info>
        <Info>Mesa: 3{mesa}</Info>
        <Info>Produto: Empada de camarão {produto}</Info>
        <Info>Valor:12,99 {valor}</Info>
        <Info>Status: {statusText}</Info>
      </span>
    </ButtonD>
  );
}

export default Pedidos;
