import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BackgroundLogin, LoginDiv, InputLogin, ButtonLogin, SenhaInvalid } from './styles';
import HeaderGenerico from "../../Components/HeaderGenerico";


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvalid, setSenhaInvalida] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', senha);

    const emailAutencicado = 'admim@gmail.com';
    const senhaAutenticada = '123';

    const estaAutenticado = [
      email === emailAutencicado,
      senha === senhaAutenticada
    ].every(Boolean);

    if (estaAutenticado) {
      window.location.replace("/Home");
    }

    if(estaAutenticado === false){
      setSenhaInvalida(true)
    }

  };
  return (
    <>
    <HeaderGenerico/>
    <BackgroundLogin>
      <LoginDiv>
        <h2>Login</h2>
        {senhaInvalid && <SenhaInvalid>Senha inválida</SenhaInvalid>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label> <br />
            <InputLogin
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label><br />
            <InputLogin
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </form>

        <p>
          Não possui uma conta? Faça o <Link to="/Cadastro"> Cadastro</Link>
        </p>

      </LoginDiv >

    </BackgroundLogin>
    </>
  );
};

export default Login;