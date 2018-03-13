import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export const TopicsContainer = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
            exact={true}
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);
