import React, { Component } from "react";
import "../styles/styles.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default class DetailPage extends Component {
  retrieveData() {
    let inputList = document.getElementsByTagName("input");
    for (let item of inputList) {
      item.value = localStorage.getItem(item.name);
    }
    let textList = document.getElementsByTagName("textarea");
    for (let item of textList) {
      item.value = localStorage.getItem(item.name);
    }
  }

  componentDidMount() {
    this.retrieveData();
  }
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
  clearData() {
    let inputList = document.getElementsByTagName("input");
    for (let index = 0; index < inputList.length; ++index) {
      inputList[index].value = "";
    }
  }

  render() {
    return (
      <div className="container">
        <button className="clear" onClick={this.clearData}>
          CLEAR ALL DATA
        </button>
      </div>
    );
  }
}
