import { NavLink } from "react-router-dom"

export const Fundamentos = () => {
  return (
    <div  className="container">
      <h1 data-testid="title">Bem vindo em Fundamentos</h1>
      <NavLink className="button" to={'/front-end'}>
        Ver outro Módulo
      </NavLink>
      <NavLink className="button" to={'/'}>
        Voltar
      </NavLink>
    </div>
  )
}