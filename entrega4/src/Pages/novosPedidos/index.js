import React from 'react';
import Header from '../../Components/Header';
import Mesas from '../../Components/Mesas/index';

const NovosPedidos = () => {
  return (
    <div>
      <Header></Header>
      <h1>Novos Pedidos</h1>
      <Mesas />
      {/* Aqui você pode adicionar mais conteúdo relacionado aos pedidos se necessário */}
    </div>
  );
};

export default NovosPedidos;
