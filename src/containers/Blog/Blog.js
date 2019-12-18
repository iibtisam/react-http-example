import React, {Component, Suspense} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import classes from './Blog.module.css';

import Posts from './Posts/Posts';

const NewPost = React.lazy(() => import("./NewPost/NewPost"));


// import NewPost from "./NewPost/NewPost";
// import asyncComponent from "../../hoc/asyncComponent";

// const AsyncNewPost = asyncComponent(() => {
//    return import("./NewPost/NewPost");
// });

class Blog extends Component {

    state = {
        auth: false
    };

    render() {

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact activeClassName={classes.active} to="/posts/"> Posts </NavLink>
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
                <Switch>
                    {/*{this.state.auth ? <Route path="/new-post" exact component={NewPost}/> : null}*/}
                    {/*<Route path="/new-post" exact component={NewPost} />*/}
                    <Route path="/new-post" render={() => (
                            <Suspense fallback={<div>Loading... </div>}>
                                <NewPost/>
                            </Suspense>
                    )}/>
                    <Route path="/posts" component={Posts}/>
                    {/*<Route render={() => <h1> Not found </h1>} /> // Handle 404 */}
                    <Redirect to="/posts" from="/"/>
                    {/*<Route path="/:id" exact component={FullPost}/>*/}
                </Switch>
            </div>
        )
            ;
    }
}

export default Blog;