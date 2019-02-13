import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home'
import JobDetail from '../pages/JobDetail/JobDetail';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/:id' component={JobDetail} exact={true}/>
        </Switch>
    </BrowserRouter>
);

export default Router;