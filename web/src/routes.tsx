import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import DeveloperForm from './pages/DeveloperForm';
import DeveloperList from './pages/DeveloperList';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/contract" component={DeveloperList} />
            <Route path="/register" component={DeveloperForm} />
        </BrowserRouter>
    );
}

export default Routes;