import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">Kangaroo</Link>
        <img src="/images/icon.PNG" width="30" height="30" className="d-inline-block align-top" alt="" />  
        </nav>
      </div>
    );
  }
}

export default Nav;