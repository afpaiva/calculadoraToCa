import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App/App';
import WhatIsTO from '../Views/whatIsTO';
import WhatIsCA from '../Views/whatIsCA';
import AreaPerm from '../Views/areaPerm';
import Help from '../Views/help';
import Message from '../Views/message';

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/" exact component = {App} />
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/whatisto" exact component = {WhatIsTO} />
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/whatisca" exact component = {WhatIsCA} />
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/areaperm" exact component = {AreaPerm} />
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/help" exact component = {Help} />
      <Route path="/apps/calculadora_de_taxa_de_ocupacao/message" exact component = {Message} />

    </Switch>
    </BrowserRouter>
  )
}