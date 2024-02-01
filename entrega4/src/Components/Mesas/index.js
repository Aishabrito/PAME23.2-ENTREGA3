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
    // Alternando o status da mesa entre 'disponivel' e 'ocupada'
    newStatus[index] = newStatus[index] === 'disponivel' ? 'ocupada' : 'disponivel';
    setStatusMesas(newStatus);

    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !buttonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <MesasContainer>
      <h1>Mesas</h1>
      {/* Lista de mesas exibindo seu status e botão de ocupação/desocupação */}
      <ul>
        {statusMesas.map((status, index) => (
          <li key={index}>
            Mesa {index + 1} - Status: {status}
             {/* Botão para ocupar ou desocupar a mesa com base no status atual */}
            <button
              onClick={() => toggleStatus(index)}
               // Alterando a cor do botão com base no estado do botão
              style={{ backgroundColor: buttonStates[index] ? 'red' : '#4caf50' }}
            >
              {/* Texto do botão dependendo do status da mesa */}
              {status === 'disponivel' ? 'Ocupar' : 'Desocupar'}
            </button>
          </li>
        ))}
      </ul>
    </MesasContainer>
  );
};

export default Mesas;
