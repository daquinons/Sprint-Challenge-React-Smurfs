import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 400px;
  padding: 35px 50px 50px 50px;
  background-color: green;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  border-radius: 3px;

  input {
    margin-bottom: 5px;
  }

  h1 {
    color: white;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.create(this.state);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <StyledForm onSubmit={this.addSmurf}>
          <h1>Add a new Smurf</h1>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </StyledForm>
      </div>
    );
  }
}

export default SmurfForm;
