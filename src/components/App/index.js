// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Navbar from '../navbar';
class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Navbar />,
        <br/>
        <div className="container">
          <div className="jumbotron">
            <div className="col-sm-8 mx-auto">
              <h1>React example</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
