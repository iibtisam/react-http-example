import React, {Component} from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';
import {withRouter} from 'react-router-dom';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount(prevProps, prevState, snapshot) {
        console.log('props', this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get('posts/' + this.props.match.params.id).then(response => {
                    this.setState({
                        loadedPost: response.data
                    })
                // }).catch(error => {
                //     console.log(error);
                })
            }
        }
    }

    deleteDataHandler = id => {
        // axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
        //     console.log('delete', response);
        // }).catch(error => {
        //     console.log(error);
        // })
        console.log(id);
        axios.delete('posts/' + id).then(response => {
            console.log('delete', response);
        });
    };

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}
                                onClick={() => this.deleteDataHandler(this.props.match.params.id)}>Delete
                        </button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;