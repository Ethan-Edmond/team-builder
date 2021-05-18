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

  const formSubmit = (member, resetcb) => {
    let newMember = {
      name: member.name.trim(),
      email: member.email.trim(),
      role: member.role
    };

    if (newMember.name.length && newMember.email.length && newMember.role.length){
      setTeam([newMember, ...team]);
      resetcb();
    }
  };

  return (
    <>
      <Form submit={formSubmit}/>
      {team.map((member, index) => <TeamMember key={index} member={member}/>)}
    </>
  );
}

export default App;
