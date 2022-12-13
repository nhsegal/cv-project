import "./App.css";
import React, { useState, useEffect } from "react";
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
      personalText,
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
      setWorkRows(workRows - 1);
    }
  };

  const clearAll = (ev) => {
    ev.preventDefault();
    setPersonalInfo({ ..."" });
    setEducationInfo([{ ..."" }]);
    setWorkInfo([{ ..."" }]);
    const inputArray = document.getElementsByTagName("input");
    const inputCommentArray = document.getElementsByTagName("textarea");

    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i].value = "";
    }
    for (let i = 0; i < inputCommentArray.length; i++) {
      inputCommentArray[i].value = "";
    }
  };

  useEffect(() => {
    let pers = document.querySelector('.personal-info');   
    let firstName = pers["first-name"].value;
    let middleName = pers["middle-name"].value;
    let lastName = pers["last-name"].value;
    let street = pers["street"].value;
    let usstate = pers["state"].value;
    let city = pers["city"].value;
    let zip = pers["zip"].value;
    let email = pers["email"].value;
    let phone = pers["phone"].value;
    let website = pers["website"].value;
    let personalText = pers["personal-text"].value;

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
      personalText,
    });


    let ed= document.querySelector('.ed-info');
    let newEducationInfo = [];
    for (let i = 0; i < edRows; i++) {
      let yearStart = ed[`year-start${i}`].value;
      let yearEnd =ed[`year-end${i}`].value;
      let institution = ed[`institution${i}`].value;
      let degree = ed[`degree${i}`].value;
      let field = ed[`field${i}`].value;
      let edBullets = ed[`bullets${i}`].value.split("\n");
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

    let work= document.querySelector('.work-info');
    let newWorkInfo = [];
    for (let i = 0; i < workRows; i++) {
      let yearStart = work[`year-start${i}`].value;
      let yearEnd = work[`year-end${i}`].value;
      let institution = work[`institution${i}`].value;
      let title = work[`title${i}`].value;
      let workBullets = work[`bullets${i}`].value.split("\n");
      newWorkInfo.push({
        yearStart,
        yearEnd,
        institution,
        title,
        workBullets,
      });
    }
    setWorkInfo(newWorkInfo);

  }, []);

  return (
    <div>
      <Header />
      <div className="main-buttons">
      <button type="button" className="clearBtn" onClick={clearAll}>
        Clear All
      </button>
      <button type="button" className="printBtn" onClick={window.print}>
        Print
      </button>
      </div>
     
      <div className="App">
        <div className="left-side">
          <PersonalInfo onSubmitPersonal={submitPersonalInfo} />
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
