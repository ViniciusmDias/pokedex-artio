import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Pokemons from '../pages/Pokemons';
import Moves from '../pages/Moves';
import Itens from '../pages/Itens';
import Pokemon from '../pages/Pokemon';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Pokemons} />
    <Route path="/moves" exact component={Moves} />
    <Route path="/itens" exact component={Itens} />
    <Route path="/pokemon/:id" exact component={Pokemon} />
  </BrowserRouter>
);
export default Routes;
