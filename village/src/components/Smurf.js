import React from "react";
import styled from "styled-components";

const StyledSmurf = styled.div`
  position: relative;
  height: 200px;
  max-width: 400px;
  min-width: 400px;
  background-color: green;
  margin: 1rem auto;
  background-image: url("/img/mushroom.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  border: 1px solid red;
  border-radius: 3px;
  padding: 4px;


  .smurf-text {
    color: white;
    position: absolute;
    height: 600px;
    left: 55%;
    top: 20%;
  }
`;

const Smurf = props => {
  return (
    <StyledSmurf>
      <div className="smurf-text">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
