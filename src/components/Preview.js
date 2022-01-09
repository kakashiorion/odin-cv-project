import React, { Component } from "react";
import "../styles/styles.css";

export default class PreviewPage extends Component {
  render() {
    return (
      <div>
        <CVContent />
      </div>
    );
  }
}

class CVContent extends Component {
  render() {
    return <div className="cv container"></div>;
  }
}
