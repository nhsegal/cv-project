import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Work from "./components/Work";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [edRows, setEdRows] = useState(2);
  const [educationInfo, setEducationInfo] = useState([{}, {}, {}]);
  const [workRows, setWorkRows] = useState(2);
  const [workInfo, setWorkInfo] = useState([{}, {}, {}]);

  

  const submitPersonalInfo = (ev) => {
    ev.preventDefault();
    let firstName = ev.target["first-name"].value;
    let middleName = ev.target["middle-name"].value;
    let lastName = ev.target["last-name"].value;

    let street = ev.target["street"].value;
    let usstate = ev.target["state"].value;
    let city = ev.target["city"].value;
    let zip = ev.target["zip"].value;

    let email = ev.target["email"].value;
    let phone = ev.target["phone"].value;
    let website = ev.target["website"].value;

    let personalText = ev.target["personal-text"].value;

    setPersonalInfo({
      firstName,
      middleName,
      lastName,
      street,
      usstate,
      city,
      zip,
      email,
      phone,
      website,
     personalText
    });
  };

  const submitEducationInfo = (ev) => {
    ev.preventDefault();
    let newEducationInfo = [];
    for (let i = 0; i < edRows; i++) {
      let yearStart = ev.target[`year-start${i}`].value;
      let yearEnd = ev.target[`year-end${i}`].value;
      let institution = ev.target[`institution${i}`].value;
      let degree = ev.target[`degree${i}`].value;
      let field = ev.target[`field${i}`].value;
      let edBullets = ev.target[`bullets${i}`].value.split("\n");
      newEducationInfo.push({
        yearStart,
        yearEnd,
        institution,
        degree,
        field,
        edBullets,
      });
    }

    setEducationInfo(newEducationInfo);
  };

  const submitWorkInfo = (ev) => {
    ev.preventDefault();

    let newWorkInfo = [];
    for (let i = 0; i < workRows; i++) {
      let yearStart = ev.target[`year-start${i}`].value;
      let yearEnd = ev.target[`year-end${i}`].value;
      let institution = ev.target[`institution${i}`].value;
      let title = ev.target[`title${i}`].value;
      let workBullets = ev.target[`bullets${i}`].value.split("\n");
      newWorkInfo.push({
        yearStart,
        yearEnd,
        institution,
        title,
        workBullets,
      });
    }
    setWorkInfo(newWorkInfo);
  };

  const addRow = (ev) => {
    setEdRows(edRows + 1);
  };

  const removeRow = (ev) => {
    if (edRows > 0) {
      setEdRows(edRows - 1);
    }
  };

  const addWorkRow = (ev) => {
    setWorkRows(workRows + 1);
  };

  const removeWorkRow = (ev) => {
    if (workRows > 0) {
      setWorkRows(workRows + 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="instructions">Replace the filler with your information, hit the update buttons, and use Ctrl P or CMD P to print.</div>
      <div className="App">
        <div className="left-side">
          <PersonalInfo onSubmitPersonal={submitPersonalInfo}  />
          <Education
            onSubmitEducation={submitEducationInfo}
            edRows={edRows}
            addRow={addRow}
            removeRow={removeRow}
          />
          <Work
            onSubmitWork={submitWorkInfo}
            workRows={workRows}
            addWorkRow={addWorkRow}
            removeWorkRow={removeWorkRow}
          />
        </div>
        <div className="right-side">
          <Display
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
