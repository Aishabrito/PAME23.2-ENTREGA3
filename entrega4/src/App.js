
import Home from './Pages/Home'; // Corrigir a importação do componente Home
import Rotas from './Rotas';
import { GlobalStyle } from './const/index';


function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Home></Home>
    </div>
  );
}

export default App;

