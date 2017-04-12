import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Navbar from './navbar';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
          .then(function (response) {
            self.setState({posts:response.data});
          })
          .catch(function (error) {
            console.log(error)
          });
  }

  render() {
    return (
      <div>
        <Navbar />,
        <br/>
        <div className="container">
          <div className="row">
              {
                 this.state.posts.map((post) => {
                    return (
                      <div className="col-md-4" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link key={post.id} to={`/posts/${post.id}`} className="btn btn-primary"> Read More >> </Link>
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

export default Posts

