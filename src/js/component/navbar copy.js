import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <button className="btn btn-success">Back to agenda</button>
      </Link>
      <div className="ml-auto">
        <Link to="/AddContact">
          <button className="btn btn-primary">Add a new contact</button>
        </Link>
      </div>
    </nav>
  );
};
