import './App.css';
import React, { useState }from "react";

import TeamMember from "./components/TeamMember";
import Form from "./components/Form";

const initialTeam = [
  {
    name: "Ethan",
    email: "eedmond@uccs.edu",
    role: "Front End Engineer"
  },
  {
    name: "Kazden",
    email: "kjolley@fakemail.com",
    role: "Back End Engineer"
  },
  {
    name: "Mike",
    email: "mkochis@fakemail.com",
    role: "Database Engineer"
  },
  {
    name: "Dom",
    email: "dsallustro@fakemail.com",
    role: "Designer"
  }
];

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    role: ""
  });

  const formUpdate = (name, value) => {
    let newFormValue = {...formValue, [name]: value};
    setFormValue(newFormValue);
  };

  const formSubmit = () => {
    
  };

  console.log(formValue);
  return (
    <>
      <Form value={formValue} update={formUpdate} submit={formSubmit}/>
      {team.map((member, index) => <TeamMember key={index} member={member}/>)}
    </>
  );
}

export default App;
