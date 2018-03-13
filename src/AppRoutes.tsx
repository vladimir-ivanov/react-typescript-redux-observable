import * as React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { HomeContainer } from './home/HomeContainer';
import { TopicsContainer } from './topics/TopicsContainer';
import PingContainer from './ping/PingContainer';

const AppRoutes = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/ping">Ping</Link>
                </li>
            </ul>
            <hr/>
            <Route exact={true} path="/" component={HomeContainer}/>
            <Route exact={true} path="/ping" component={PingContainer}/>
            <Route path="/topics" component={TopicsContainer}/>
        </div>
    </Router>
);
export default AppRoutes;
