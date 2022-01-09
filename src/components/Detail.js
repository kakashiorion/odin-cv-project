import React, { Component } from "react";
import "../styles/styles.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default class DetailPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <span>ENTER CV DETAILS</span>
        </div>
        <GeneralInfo />
        <Education />
        <Experience />
        <ClearButton />
      </>
    );
  }
}

class ClearButton extends Component {
  render() {
    return (
      <div className="container">
        <button className="clear">CLEAR</button>
      </div>
    );
  }
}
