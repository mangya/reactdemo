import React, { Component } from 'react';
import { Link } from 'react-router';

const Navbar = (props) => (
	<nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" > Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link" > Posts </Link>
          </li>
        </ul>
      </div>
    </nav>
);

export default Navbar;