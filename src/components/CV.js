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

//GENERALINFO SECTION
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

//EDUCATION SECTION
class CVEducation extends Component {
  render() {
    return (
      <div className="cvEducation">
        <CVEducationHeader />
        <CVSchoolName id="" />
        <CVDateStudy id="" />
        <CVTitleStudy id="" />
        <CVEducationSection />
      </div>
    );
  }
}

class CVEducationSection extends Component {
  getSchoolList() {
    let idList = [];
    for (let key in localStorage) {
      if (key.substring(0, 10) === "SchoolName" && key !== "SchoolName") {
        let id = key.substring(10);
        idList.push(id);
      }
    }
    return idList;
  }

  render() {
    return (
      <div className="cvEducationSection">
        {this.getSchoolList().map((id) => {
          return (
            <>
              <CVSchoolName id={id} />
              <CVDateStudy id={id} />
              <CVTitleStudy id={id} />
            </>
          );
        })}
      </div>
    );
  }
}

class CVEducationHeader extends Component {
  render() {
    return <div className="cvEducationHeader">EDUCATION</div>;
  }
}

class CVSchoolName extends Component {
  render() {
    return (
      <div className="cvSchoolName">
        {localStorage.getItem("SchoolName" + this.props.id)}
      </div>
    );
  }
}
const months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

class CVTitleStudy extends Component {
  render() {
    return (
      <div className="cvTitleStudy">
        {localStorage.getItem("TitleStudy" + this.props.id)}
      </div>
    );
  }
}

class CVDateStudy extends Component {
  formatDate(date) {
    let dateArray = date.split("-");
    return months[dateArray[1]] + " " + dateArray[0];
  }
  render() {
    return (
      <div className="cvDateStudy">
        {this.formatDate(
          localStorage.getItem("DateStudyStart" + this.props.id)
        )}{" "}
        {" - "}
        {this.formatDate(localStorage.getItem("DateStudyEnd" + this.props.id))}
      </div>
    );
  }
}

//EXPERIENCE SECTION
class CVExperience extends Component {
  render() {
    return (
      <div className="cvExperience">
        <CVExperienceHeader />
        <CVCompany id="" />
        <CVDateJob id="" />
        <CVJobTitle id="" />
        <CVJobTasks id="" />
        <CVExperienceSection />
      </div>
    );
  }
}

class CVExperienceHeader extends Component {
  render() {
    return <div className="cvExperienceHeader">EXPERIENCE</div>;
  }
}

class CVExperienceSection extends Component {
  getCompanyList() {
    let idList = [];
    for (let key in localStorage) {
      if (key.substring(0, 7) === "Company" && key !== "Company") {
        let id = key.substring(7);
        idList.push(id);
      }
    }
    return idList;
  }

  render() {
    return (
      <div className="cvExperienceSection">
        {this.getCompanyList().map((id) => {
          return (
            <>
              <CVCompany id={id} />
              <CVDateJob id={id} />
              <CVJobTitle id={id} />
              <CVJobTasks id={id} />
            </>
          );
        })}
      </div>
    );
  }
}

class CVCompany extends Component {
  render() {
    return (
      <div className="cvCompany">
        {localStorage.getItem("Company" + this.props.id)}
      </div>
    );
  }
}

class CVJobTitle extends Component {
  render() {
    return (
      <div className="cvJobTitle">
        {localStorage.getItem("JobTitle" + this.props.id)}
      </div>
    );
  }
}

class CVJobTasks extends Component {
  render() {
    return (
      <div className="cvJobTasks">
        {localStorage.getItem("JobTasks" + this.props.id)}
      </div>
    );
  }
}

class CVDateJob extends Component {
  formatDate(date) {
    let dateArray = date.split("-");
    return months[dateArray[1]] + " " + dateArray[0];
  }
  render() {
    return (
      <div className="cvDateJob">
        {this.formatDate(localStorage.getItem("DateJobStart" + this.props.id))}{" "}
        {" - "}
        {this.formatDate(localStorage.getItem("DateJobEnd" + this.props.id))}
      </div>
    );
  }
}
