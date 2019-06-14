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
  cursor: pointer;

  .smurf-text {
    color: white;
    position: absolute;
    height: 600px;
    left: 55%;
    top: 20%;
  }

  .delete-button {
    position: absolute;
    top: -25px;
    right: 4px;
  }
`;

const Smurf = props => {
  const onClickDelete = event => {
    event.preventDefault();
    console.log("DELETE!");
    event.stopPropagation();
    props.delete(props.smurf);
  };

  return (
    <StyledSmurf>
      <div className="smurf-text">
        <h3>{props.smurf.name}</h3>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
        {props.delete ? (
          <span className="delete-button" onClick={onClickDelete}>
            Delete
          </span>
        ) : null}
        {props.edit ? <button>Edit</button> : null}
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
