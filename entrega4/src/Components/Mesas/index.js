import React, { useState } from 'react';

const Mesas = () => {
  // Estado para controlar o status das mesas (ocupada ou disponível)
  const [statusMesas, setStatusMesas] = useState(Array(10).fill('disponivel'));

  // Função para mudar o status de uma mesa
  const toggleStatus = (index) => {
    const newStatus = [...statusMesas];
    newStatus[index] = newStatus[index] === 'disponivel' ? 'ocupada' : 'disponivel';
    setStatusMesas(newStatus);
  };

  return (
    <div>
      <h1>Mesas</h1>
      <ul>
        {statusMesas.map((status, index) => (
          <li key={index}>
            Mesa {index + 1} - Status: {status}
            <button onClick={() => toggleStatus(index)}>
              {status === 'disponivel' ? 'Ocupar' : 'Desocupar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mesas;
