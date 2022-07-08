import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from './App';
import userEvent from '@testing-library/user-event';

test('testando página "home"', () => {
  const { history } = renderWithRouter(<Home />);
  
  // buscando elemento com getbyRole por ser a melhor maneira de buscar um elemento
  const h1 = screen.getByRole('heading', {name: "Navegue entre os módulos da Tybe", level: 1});
  const link = screen.getByRole('link', { name: 'Ver outro Módulo' });

  expect(h1).toBeInTheDocument()
  expect(link).toBeTruthy();

  //interação com elementos + tipos de interação
  userEvent.click(link)
  
  //testando rotas
  const { pathname } = history.location
  expect(pathname).toBe('/fundamentos');
});
