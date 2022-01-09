import React, { Component } from "react";
import "../styles/styles.css";

export default class GeneralInfo extends Component {
  render() {
    return (
      <div className="container">
        <span>GENERAL INFO</span>
        <Name />
        <Email />
        <Phone />
        <Website />
        <Photo />
      </div>
    );
  }
}

class Name extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Name">Your Name:</label>
        <input type={"text"} name="Name"></input>
      </div>
    );
  }
}

class Email extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Email">Email Address:</label>
        <input type={"text"} name="Email"></input>
      </div>
    );
  }
}

class Phone extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Phone">Phone Number:</label>
        <input type={"text"} name="Phone"></input>
      </div>
    );
  }
}

class Website extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Website">Wesbite URL:</label>
        <input type={"text"} name="Website"></input>
      </div>
    );
  }
}

class Photo extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Photo">Add Photo:</label>
        <input type={"file"} id="Photo" className="upload" name="Photo"></input>
      </div>
    );
  }
}
