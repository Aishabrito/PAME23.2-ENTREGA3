import React from "react";
import Header from "../../Components/Header";
import { Background, Title } from "./styles";

function Home() {
  return (
    <div>
      <Header />
      <Background>
        <Title>Delícias Salgadas</Title>
      </Background>
    </div>
  );
}

export default Home;
