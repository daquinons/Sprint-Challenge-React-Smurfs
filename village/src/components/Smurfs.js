import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs" style={{ textAlign: "center" }}>
        <h1 style={{ color: "green" }}>Smurf Village</h1>

        <Route
          path="/"
          render={() => {
            return this.props.smurfs.map((smurf, index) => {
              return (
                <Link key={index} to={`/smurfs/${smurf.id}`}>
                  <Smurf smurf={smurf} delete={this.props.delete} />
                </Link>
              );
            });
          }}
        />
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
