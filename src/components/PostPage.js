import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Navbar from './navbar';

class PostPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: [],
      comments: []
    }
  }

  componentDidMount() {
    var self = this;
    const id = this.props.params.id;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
          .then(function (response) {
            self.setState({post:response.data});
          })
          .catch(function (error) {
            console.log(error)
          });

    axios.get('https://jsonplaceholder.typicode.com/comments?postId='+id)
          .then(function (response) {
            self.setState({comments:response.data});
          })
          .catch(function (error) {
            console.log(error)
          });

  }

  render() {
    return (
      <div>
        <Navbar />
        <br/>
        <div className="container">
        <div className="jumbotron">
            <div className="col-sm-8 mx-auto">
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Comments</h2>
          </div>
        {
           this.state.comments.map((comment) => {
              return (
                <div className="col-md-12" key={comment.id}>
                  <strong>Email: {comment.email}</strong>
                  <p>Comment: {comment.body}</p>
                </div>
              )
           })
        }
        </div>
        </div>
      </div>
      );
  }
}

export default PostPage

