
import React, { useState } from "react";
import { InputDiv } from './styles';

function Input(props) {
  // Adicionando um estado local para o valor do input
  const [inputValue, setInputValue] = useState(props.value || ''); // Defina um valor inicial se necessário

  return (
    <InputDiv
      type={props.tipo}
      placeholder={props.placeholder}
      // Atualizando o estado local quando o valor do input mudar
      onChange={(e) => {
        setInputValue(e.target.value);
        // Passando o valor atualizado para o componente pai, se necessário
        if (props.setvariavel) {
          props.setvariavel(e.target.value);
        }
      }}
      id={props.id}
      value={inputValue} // Usando o estado local como valor do input
    />
  );
}

export default Input;
