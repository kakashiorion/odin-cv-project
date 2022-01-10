import React, { Component } from "react";
import "../styles/styles.css";
import uniqid from "uniqid";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { exSectionList: [], id: uniqid() };
    this.addExperienceSection = this.addExperienceSection.bind(this);
  }

  addExperienceSection = () => {
    this.setState({
      exSectionList: this.state.exSectionList.concat([this.state.id]),
      id: uniqid(),
    });
  };

  render() {
    return (
      <div className="container">
        <span>EXPERIENCE</span>
        <Company id={""} />
        <JobTitle id={""} />
        <JobTasks id={""} />
        <DateJobStart id={""} />
        <DateJobEnd id={""} />
        <ExperienceExtraList exList={this.state.exSectionList} />
        <AddExperience click={this.addExperienceSection} />
      </div>
    );
  }
}

class ExperienceExtraList extends Component {
  constructor(props) {
    super(props);
    this.removeExperience = this.removeExperience.bind(this);
  }

  removeExperience(id) {
    const index = this.props.exList.indexOf(id);
    this.setState({
      exList: this.props.exList.splice(index, 1),
    });
  }

  render() {
    return (
      <>
        {this.props.exList.map((ex) => {
          return (
            <ExperienceSection
              id={ex}
              key={ex}
              removeEx={() => this.removeExperience(ex)}
            />
          );
        })}
      </>
    );
  }
}

class ExperienceSection extends Component {
  render() {
    return (
      <div className="innerContainer">
        <Company id={this.props.id} />
        <JobTitle id={this.props.id} />
        <JobTasks id={this.props.id} />
        <DateJobStart id={this.props.id} />
        <DateJobEnd id={this.props.id} />
        <RemoveExperience removeEx={this.props.removeEx} />
      </div>
    );
  }
}

class Company extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="Company">Company Name:</label>
        <input type={"text"} name={"Company" + this.props.id}></input>
      </div>
    );
  }
}

class JobTitle extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="JobTitle">Job Title:</label>
        <input type={"text"} name={"JobTitle" + this.props.id}></input>
      </div>
    );
  }
}

class DateJobStart extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateJobStart">From Date:</label>
        <input type={"date"} name={"DateJobStart" + this.props.id}></input>
      </div>
    );
  }
}

class JobTasks extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="JobTasks">Job Tasks:</label>
        <input type={"text"} name={"JobTasks" + this.props.id}></input>
      </div>
    );
  }
}

class DateJobEnd extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateJobEnd">To Date:</label>
        <input type={"date"} name={"DateJobEnd" + this.props.id}></input>
      </div>
    );
  }
}

class AddExperience extends Component {
  render() {
    return (
      <div className="section">
        <button className="add" onClick={this.props.click}>
          Add Experience
        </button>
      </div>
    );
  }
}

class RemoveExperience extends Component {
  render() {
    return (
      <div className="section">
        <button className="remove" onClick={this.props.removeEx}>
          Remove Experience
        </button>
      </div>
    );
  }
}
