import React, {Component} from "react";
import axios from 'axios';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';


class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    postSelectedHandler = id => {
        this.setState({
            selectedPostId: id
        });

    };

    componentDidMount() {
        console.log(this.props);
        axios.get('posts').then(response => {
            console.log(response);
            const posts = response.data.slice(0,4);
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
        const posts = this.state.posts.map(
            post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            }
        );
        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        )
    };
}

export default Posts;


{/*<section>*/
}
{/*    <FullPost id={this.state.selectedPostId} />*/
}
{/*</section>*/
}
{/*<section>*/
}
{/*    <NewPost />*/
}
{/*</section>*/
}
