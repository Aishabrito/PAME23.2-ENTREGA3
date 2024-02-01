// Home.jsx
import React from "react";
import Header from "../../Components/Header";
import { Background, Container, Title } from "./styles"; // Importe os componentes necessários

function Home() {
  return (
    <div>
      <Header />
      <Background>
        {/* Envolve as outras divs com o componente Container */}
        <Container>
          <Title>Delícias Salgadas</Title>
          {/* Outros elementos da tela podem ser adicionados aqui */}
        </Container>
      </Background>
    </div>
  );
}

export default Home;
