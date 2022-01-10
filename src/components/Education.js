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
    this.setState({
      edSectionList: this.state.edSectionList.concat([this.state.id]),
      id: uniqid(),
    });
  };

  render() {
    return (
      <div id="educationContainer" className="container">
        <span>EDUCATION</span>
        <SchoolName id={""} />
        <TitleStudy id={""} />
        <DateStudyStart id={""} />
        <DateStudyEnd id={""} />
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
              id={ed}
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
        <SchoolName id={this.props.id} />
        <TitleStudy id={this.props.id} />
        <DateStudyStart id={this.props.id} />
        <DateStudyEnd id={this.props.id} />
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
        <input type={"text"} name={"SchoolName" + this.props.id}></input>
      </div>
    );
  }
}

class TitleStudy extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="TitleStudy">Title of Study:</label>
        <input type={"text"} name={"TitleStudy" + this.props.id}></input>
      </div>
    );
  }
}

class DateStudyStart extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateStudyStart">Date of Starting Study:</label>
        <input type={"date"} name={"DateStudyStart" + this.props.id}></input>
      </div>
    );
  }
}

class DateStudyEnd extends Component {
  render() {
    return (
      <div className="section">
        <label htmlFor="DateStudyEnd">Date of Completing Study:</label>
        <input type={"date"} name={"DateStudyEnd" + this.props.id}></input>
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
