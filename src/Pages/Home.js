import { NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <div  className="container">
      <h1 data-testid="title">Navegue entre os módulos da Tybe</h1>
      <NavLink className="button" to={'/fundamentos'}>
        Ver outro Módulo
      </NavLink>
    </div>
  )
}