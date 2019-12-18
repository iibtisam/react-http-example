import React, {Component} from "react";
import axios from 'axios';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import {Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";


class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    postSelectedHandler = id => {
        // console.log(this.props);
        // this.setState({
        //     selectedPostId: id
        // });
        // this.props.history.push({ pathname: '/posts' + id});
        this.props.history.push('/posts/' + id);

    };

    componentDidMount() {
        // console.log('props posts: ', this.props);
        axios.get('posts').then(response => {
            // console.log(response);
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Ibtisam'
                }
            });
            this.setState({
                posts: updatedPosts
            })
        });
    }


    render() {
        // console.log(this.props.match.url + '/:id');
        const posts = this.state.posts.map(
            post => {
                // return <Link to={'/posts/'+post.id} key={post.id}>
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
                // </Link>
            }
        );
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        )
    };
}

export default Posts;

