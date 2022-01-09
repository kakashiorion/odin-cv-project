import React, { Component } from "react";
import "../styles/styles.css";
import uniqid from "uniqid";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { edSectionList: [], id: uniqid() };
    this.addEducationSection = this.addEducationSection.bind(this);
  }

  addEducationSection = () => {
    console.log(this.state.edSectionList);
    this.setState({
      edSectionList: this.state.edSectionList.concat([this.state.id]),
      id: uniqid(),
    });
  };

  render() {
    return (
      <div id="educationContainer" className="container">
        <span>EDUCATION</span>
        <SchoolName />
        <Title />
        <DateStudyStart />
        <DateStudyEnd />
        <EducationExtraList edList={this.state.edSectionList} />
        <AddEducation click={this.addEducationSection} />
      </div>
    );
  }
}

class EducationExtraList extends Component {
  constructor(props) {
    super(props);
    this.removeEducation = this.removeEducation.bind(this);
  }

  removeEducation(id) {
    const index = this.props.edList.indexOf(id);
    this.setState({
      edList: this.props.edList.splice(index, 1),
    });
  }

  render() {
    return (
      <>
        {this.props.edList.map((ed) => {
          return (
            <EducationSection
              key={ed}
              removeEd={() => this.removeEducation(ed)}
            />
          );
        })}
      </>
    );
  }
}

class EducationSection extends Component {
  render() {
    return (
      <div className="innerContainer">
        <SchoolName />
        <Title />
        <DateStudyStart />
        <DateStudyEnd />
        <RemoveEducation removeEd={this.props.removeEd} />
      </div>
    );
  }
}

class SchoolName extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="SchoolName">School Name:</label>
        <input type={"text"} name="SchoolName"></input>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="TitleStudy">Title of Study:</label>
        <input type={"text"} name="TitleStudy"></input>
      </div>
    );
  }
}

class DateStudyStart extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateStudyStart">Date of Starting Study:</label>
        <input type={"text"} name="DateStudyStart"></input>
      </div>
    );
  }
}

class DateStudyEnd extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateStudyEnd">Date of Completing Study:</label>
        <input type={"text"} name="DateStudyEnd"></input>
      </div>
    );
  }
}

class AddEducation extends Component {
  render() {
    return (
      <div className="section">
        <button className="add" onClick={this.props.click}>
          Add Education
        </button>
      </div>
    );
  }
}

class RemoveEducation extends Component {
  render() {
    return (
      <div className="section">
        <button className="remove" onClick={this.props.removeEd}>
          Remove Education
        </button>
      </div>
    );
  }
}
