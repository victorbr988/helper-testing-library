import { NavLink } from "react-router-dom"

export const Frontend = () => {
  return (
    <div className="container">
      <h1 data-testid="title">Bem vindo em Front end</h1>
      <NavLink className="button" to={'/back-end'}>
        Ver outro Módulo
      </NavLink>
      <NavLink className="button" to={'/fundamentos'}>
        Voltar
      </NavLink>
    </div>
  )
}