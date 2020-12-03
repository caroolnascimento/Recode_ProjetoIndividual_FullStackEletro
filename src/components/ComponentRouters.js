import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../routers/Home';
import Produtos from '../routers/Produtos';
import Lojas from '../routers/Lojas';
import Contato from '../routers/Contato';

function ComponentRouters() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/nossaslojas" component={Lojas} />
            <Route path="/contatos" component={Contato} />
        </Switch>
    )
}

export default ComponentRouters;