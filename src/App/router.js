import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home'
import JobDetail from '../pages/JobDetail/JobDetail';
import Dashboard from '../pages/Member/Dashboard/Dashboard';
import Departments from '../pages/Member/Departments/Departments';
import JobList from '../pages/Member/JobList/JobList';
import CreateJob from '../pages/Member/CreateJob/CreateJob';
import Register from '../pages/Member/Register/Register';
import Login from '../pages/Member/Login/Login';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/job/:id' component={JobDetail} exact={true}/>
            <Route path='/dashboard' component={Dashboard} exact={true}/>
            <Route path='/dashboard/departments' component={Departments} exact={true}/>
            <Route path='/dashboard/jobs' component={JobList} exact={true}/>
            <Route path='/dashboard/jobs/new' component={CreateJob} exact={true}/>
            <Route path='/dashboard/register' component={Register} exact={true}/>
            <Route path='/dashboard/login' component={Login} exact={true}/>
        </Switch>
    </BrowserRouter>
);

export default Router;