import React, { useState } from "react";
import { Background, MainContainer } from "./styles";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import HeaderGenerico from "../../Components/HeaderGenerico";

function Cadastro() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };

  // const user = { nome: name, email: login, senha: password, telefone: phone, cpf: cpf };

  return (
    <>
      <HeaderGenerico />
    <Background>
    
      <MainContainer>
        <h1>Cadastre-se</h1>
        <Input tipo="text" id="login" content={"Login"} onChange={handleLogin} value={login} />
        <Input tipo="text" id="name" content={"Nome"} onChange={handleName} value={name} />
        <Input tipo="text" id="phone" content={"Telefone"} onChange={handlePhone} value={phone} />
        <Input tipo="text" id="cpf" content={"CPF"} onChange={handleCpf} value={cpf} />
        <Input tipo="password" id="password" content={"Senha"} onChange={handlePassword} value={password} />
        {/* <AltButtonDiv title={"Cadastrar"} routes="/Home" /> */}
        <h3>
          Já possui conta? Faça o <Link to="/">Login</Link>
        </h3>
      </MainContainer>
    </Background>
    </>
  );
}

export default Cadastro;