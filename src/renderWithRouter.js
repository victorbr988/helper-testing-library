import React from 'react';
import { render } from "@testing-library/react"
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history"


const renderWithRouter = (component) => {
  const history = createMemoryHistory(); // histórico de navegação 
  return({
    ...render(<Router history={ history }>{component}</Router>), // aceeso a todos os matchers(getByROle...)
    history, // enviando o histórico de navegação para dentro desse objeto para poder dar acesso as funções e informações como rotas
  });
};

export default renderWithRouter;