import React from 'react'
import { Link } from 'react-router-dom'

import BulbassauroIcon from '../../assets/pokemons/bulbassauro.svg'
import GrassType from '../../assets/types/grass-type.svg'
import PoisonType from '../../assets/types/poison-type.svg'

import './styles.sass'

const PokeList: React.FC = () => {
  return (
    <li>
      <Link to="" title="Go to selected pokemon">
        <img src={BulbassauroIcon} alt="" />
        <div>
          <h2>Bulbasaur</h2>
          <h5>#001</h5>
        </div>
        <a href="/" title="Go to infos about selected type">
          <img src={GrassType} alt="grass-type" />
        </a>
        <a href="/" title="Go to infos about selected type">
          <img src={PoisonType} alt="poison-type" />
        </a>
      </Link>
    </li>
  )
}

export default PokeList
