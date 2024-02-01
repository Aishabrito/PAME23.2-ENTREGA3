
import React from "react";
import { InputDiv } from './styles';
// Componente funcional para um campo de entrada de texto reutilizável
function Input(props) {
  return (
    <InputDiv
      type={props.tipo}
      placeholder={props.placeholder}
	   // Adicionando um evento de alteração (onChange) para atualizar a variável recebida como propriedade
      onChange={(e) => props.setvariavel(e.target.value)}
      id={props.id}
      value={props.value}
    />
  );
}

export default Input;
