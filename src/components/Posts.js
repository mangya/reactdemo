import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
          .then(function (response) {
            self.setState({posts:response.data, loading: false});
          })
          .catch(function (error) {
            console.log(error)
          });
  }

  render() {
    let content = this.state.loading ? <div className="col-sm-12">Loading...</div> : this.state.posts.map((post) => {
                    return (
                      <div className="col-md-4" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link key={post.id} to={`/posts/${post.id}`} className="btn btn-primary"> Read More >> </Link>
                      </div>
                    )
                 });

    return (
        <div className="row">
            {content}
        </div>
      );
  }
}

export default Posts

