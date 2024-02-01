import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BackgroundLogin, LoginDiv, InputLogin, ButtonLogin, SenhaInvalid } from './styles';
import HeaderGenerico from "../../Components/HeaderGenerico";


const Login = () => {
  // Estados para armazenar o email, senha e status de senha inválida
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvalid, setSenhaInvalida] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
// Lógica de autenticação (exemplo de email e senha autenticados)
    const emailAutencicado = 'admim@gmail.com';
    const senhaAutenticada = '123';

    const estaAutenticado = [
      // Verificando se as credenciais fornecidas correspondem às credenciais autenticadas
      email === emailAutencicado,
      senha === senhaAutenticada
    ].every(Boolean);
// Redirecionando para a página Home se as credenciais forem autenticadas
    if (estaAutenticado) {
      window.location.replace("/Home");
    }
// Exibindo mensagem de senha inválida se as credenciais não forem autenticadas
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
        {/* Exibindo mensagem de senha inválida se senhaInvalid for verdadeira */}
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
            {/* Botão para enviar o formulário de login */}
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