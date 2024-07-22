import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContentPage from './pages/ContentPage';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/content" component={ContentPage} />
            </Switch>
        </div>
    );
}

export default App;
