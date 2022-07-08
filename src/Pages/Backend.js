import { NavLink } from "react-router-dom"

export const Backend = () => {
  return (
    <div  className="container">
      <h1 data-testid="title">Bem vindo em Back end</h1>
      <NavLink className='button' to={'/front-end'}>
        Voltar
      </NavLink>
    </div>
  )
}