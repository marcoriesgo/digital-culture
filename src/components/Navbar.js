import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left-container">
            <h1 className="navbar-title">Digital Culture</h1>
            <h3 className="navbar-credits">By Marco Riesgo</h3>
        </div>
        <div className="navbar-right-container">
            <Link to="/">
                <h2 className="navbar-link">Home</h2>
            </Link>
            <Link to="/unit1">
                <h2 className="navbar-link">Critical Consumption</h2>
            </Link>
            <Link to="/unit2">
                <h2 className="navbar-link">Positive Obsession</h2>
            </Link>
            <Link to="/unit3">
                <h2 className="navbar-link">Participatory Future</h2>
            </Link>
            <Link to="/unit4">
                <h2 className="navbar-link">Serendipity</h2>
            </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;