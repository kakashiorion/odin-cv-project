import React, { Component } from "react";
import "./styles/styles.css";
import PreviewPage from "./components/Preview";
import DetailPage from "./components/Detail";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isPreviewing: false };
    this.showCV = this.showCV.bind(this);
    this.hideCV = this.hideCV.bind(this);
  }

  showCV() {
    this.setState({
      isPreviewing: true,
    });
  }

  hideCV() {
    this.setState({
      isPreviewing: false,
    });
  }

  render() {
    return (
      <>
        {this.state.isPreviewing ? <PreviewPage /> : <DetailPage />}
        {this.state.isPreviewing ? (
          <BackButton click={this.hideCV} />
        ) : (
          <PreviewButton click={this.showCV} />
        )}
      </>
    );
  }
}

class PreviewButton extends Component {
  render() {
    return (
      <div className="container">
        <button className="preview" onClick={this.props.click}>
          PREVIEW CV
        </button>
      </div>
    );
  }
}

class BackButton extends Component {
  render() {
    return (
      <div className="container">
        <button className="back" onClick={this.props.click}>
          GO BACK
        </button>
      </div>
    );
  }
}
