import React, { Component } from "react";
import Header from "../../common/header/header";
import "./Home.css";
import SingleLineGridList from "./gridList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./details/details";
import { id } from "date-fns/locale";

class Home extends Component {
  render() {
    return (
      <Router style={{ margin: 0 }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <div className="upcoming">
                  <span>Upcoming Movies</span>
                </div>
                <SingleLineGridList />
              </div>
            }
          />

          <Route
            exact
            path = "/movie/:id"
            element={
                <Details/>
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default Home;
