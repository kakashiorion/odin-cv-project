import React, { Component } from "react";
import "../styles/cv.css";

export default class PreviewPage extends Component {
  render() {
    return (
      <div>
        <CVContainer />
      </div>
    );
  }
}

class CVContainer extends Component {
  render() {
    return (
      <div className="cvContainer">
        <CVGeneralInfo />
        <CVEducation />
        <CVExperience />
      </div>
    );
  }
}

class CVGeneralInfo extends Component {
  render() {
    return (
      <div className="cvGeneralInfo">
        <CVName />
        <CVEmail />
        <CVPhone />
        <CVWebsite />
        <CVProfession />
      </div>
    );
  }
}

class CVEducation extends Component {
  render() {
    return <div className="cvEducation"></div>;
  }
}

class CVExperience extends Component {
  render() {
    return <div className="cvExperience"></div>;
  }
}

class CVName extends Component {
  render() {
    return <div className="cvName">{localStorage.getItem("Name")}</div>;
  }
}

class CVPhone extends Component {
  render() {
    return (
      <div className="cvPhone">
        <i></i>
        {localStorage.getItem("Phone")}
      </div>
    );
  }
}

class CVEmail extends Component {
  render() {
    return <div className="cvEmail">{localStorage.getItem("Email")}</div>;
  }
}

class CVWebsite extends Component {
  render() {
    return <div className="cvWebsite">{localStorage.getItem("Website")}</div>;
  }
}

class CVProfession extends Component {
  render() {
    return (
      <div className="cvProfession ">{localStorage.getItem("Profession")}</div>
    );
  }
}
