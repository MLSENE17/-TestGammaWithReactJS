import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Stage1 from './components/Stage1/Stage1';
import Stage2 from './components/Stage2/Stage2';
function Routing() {
    return (
        <Router>
            <Switch>
                <Route
                exact
                path="/"
                render={() => {
                    return (
                        <Redirect to="/Home" />
                    )
                }}
                />
                 <Route exact path="/Home" component={Home} />
                 <Route exact path="/stage1" component={Stage1} />
                 <Route exact path="/stage2" component={Stage2} />
            </Switch>
        </Router>
    );
};

export default Routing;