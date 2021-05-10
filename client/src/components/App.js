import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./Datelist/List";
import { WeatherAppContents } from "../constants/Dates";

class App extends Component {
  state = {
    SelectedDay: 3
  };
  render() {
    return (
      <div className="app">
        <Navbar className="Header  justify-content-center" dark={true}>
          Weather App..
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <List
                WeatherAppContents={WeatherAppContents}
                SelectedDay={this.state.SelectedDay}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
