import React from 'react';
import Home from './Pages/Home';
import { GlobalStyle } from './const/index';
import { MainRoutes } from './routes';

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainRoutes />
    </div>
  );
}

export default App;
