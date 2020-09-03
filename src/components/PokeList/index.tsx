import React from 'react'

import PokeListItem from '../PokeListItem/index'

import './styles.sass'

const PokeList: React.FC = () => {
  return (
    <section >
      <ul>
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
      </ul>
    </section>
  )
}

export default PokeList
