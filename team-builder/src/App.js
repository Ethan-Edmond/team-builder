import './App.css';
import React, { useState }from "react";

import TeamMember from "./components/TeamMember";
import TeamForm from "./components/TeamForm";

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

  console.log(team);
  return (
    <>
      <TeamForm/>
      {team.map((member, index) => <TeamMember key={index} member={member}/>)}
    </>
  );
}

export default App;
