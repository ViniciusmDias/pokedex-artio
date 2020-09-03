import React from 'react'

import { Link } from 'react-router-dom'

import itensIcon from '../../assets/menu-icons/itens.svg'
import movesIcon from '../../assets/menu-icons/moves.svg'
import pokeballIcon from '../../assets/menu-icons/pokeball.svg'

import './styles.sass'

const Navigation: React.FC = () => {

  return (
    <header>
      <Link to="/">
        <img src={pokeballIcon} alt="pokeball icon" />
        <strong>Pokemon</strong>
      </Link>
      <Link to="/moves">
        <img src={movesIcon} alt="moves icon" />
        <strong>Moves</strong>
      </Link>
      <Link to="/itens">
        <img src={itensIcon} alt="itens icon" />
        <strong>Itens</strong>
      </Link>
    </header>
  )
}
export default Navigation
