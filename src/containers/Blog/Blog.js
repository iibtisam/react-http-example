import React, {Component} from 'react';
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";
import {Route, NavLink} from 'react-router-dom';


class Blog extends Component {

    render() {

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact activeClassName={classes.active} to="/"> Home </NavLink>
                            </li>
                            <li>
                                {/*This one is also works*/}
                                {/*<NavLink to="/new-post"> New Post </NavLink>*/}

                                <NavLink exact activeClassName={classes.active} to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}> New Post </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;