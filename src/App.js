import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import classes from './App.module.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <Blog/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
