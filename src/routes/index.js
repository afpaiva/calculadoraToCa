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
      <Route path="/" exact component = {App} />
      <Route path="/whatisto" exact component = {WhatIsTO} />
      <Route path="/whatisca" exact component = {WhatIsCA} />
      <Route path="/areaperm" exact component = {AreaPerm} />
      <Route path="/help" exact component = {Help} />
      <Route path="/message" exact component = {Message} />
    </Switch>
    </BrowserRouter>
  )
}