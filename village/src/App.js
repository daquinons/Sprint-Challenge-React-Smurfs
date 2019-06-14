import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const APIURL = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  async componentDidMount() {
    const smurfs = await this.getSmurfs();
    this.setState({ smurfs: smurfs });
  }

  async getSmurfs() {
    try {
      const dataSmurfs = await axios.get(APIURL);
      return dataSmurfs.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createNewSmurf(smurf) {
    try {
      const dataResponse = await axios.post(APIURL, smurf);
      this.setState({ smurfs: dataResponse.data });
    } catch (error) {
      console.log(error);
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/smurf-for" render={() => <SmurfForm create={this.createNewSmurf.bind(this)} />} />
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />        
      </div>
    );
  }
}

export default App;
