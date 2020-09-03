import React from 'react';

import Container from '../../components/Container'
import Search from '../../components/Search'

import './pokemons.sass'

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Pokemon</h1>
      <Search />
    </Container>
  )
};
export default Login;
