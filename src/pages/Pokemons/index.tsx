import React from 'react';

import Container from '../../components/Container'
import Search from '../../components/Search'
import PokeList from '../../components/PokeList'
import NavigationMenu from '../../components/NavigationMenu'

import './styles.sass'

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Pokemon</h1>
      <Search />
      <PokeList />
      <NavigationMenu />
    </Container>
  )
};
export default Login;
