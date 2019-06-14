import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/smurf-for"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      >
        New Smurf
      </NavLink>
    </header>
  );
};

export default Header;
