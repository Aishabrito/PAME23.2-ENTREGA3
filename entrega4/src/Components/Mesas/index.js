import React, { useState } from 'react';
import { MesasContainer } from './styles'; // Importando o MesasContainer do styles.js

const Mesas = () => {
  // Estado para controlar o status das mesas (ocupada ou disponível)
  const [statusMesas, setStatusMesas] = useState(Array(10).fill('disponivel'));

  // Estado para controlar o estado de cada botão individualmente
  const [buttonStates, setButtonStates] = useState(Array(10).fill(false));

  // Função para mudar o status de uma mesa e o estado do botão
  const toggleStatus = (index) => {
    const newStatus = [...statusMesas];
    newStatus[index] = newStatus[index] === 'disponivel' ? 'ocupada' : 'disponivel';
    setStatusMesas(newStatus);

    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !buttonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <MesasContainer>
      <h1>Mesas</h1>
      <ul>
        {statusMesas.map((status, index) => (
          <li key={index}>
            Mesa {index + 1} - Status: {status}
            <button
              onClick={() => toggleStatus(index)}
              style={{ backgroundColor: buttonStates[index] ? 'red' : '#4caf50' }}
            >
              {status === 'disponivel' ? 'Ocupar' : 'Desocupar'}
            </button>
          </li>
        ))}
      </ul>
    </MesasContainer>
  );
};

export default Mesas;
