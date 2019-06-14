import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  width: 75%;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyleHeader>
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
    </StyleHeader>
  );
};

export default Header;
