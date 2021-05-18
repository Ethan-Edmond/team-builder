import './App.css';
import React, { useState }from "react";
import Team from "./components/Team";
import data from "./data";

function App() {
  const [teams, setTeams] = useState(data);
  console.log(teams);

  function makeTeamSetter (index) {
    return (team) => {
      let newTeams = [...teams];
      newTeams[index] = team;
      setTeams(newTeams);
    };
  }

  return (
    <>
      {
        teams.map((team, index) => (
          <>
            <h2 key={index}>Team #{index + 1}</h2>
            <Team key={index} team={team} setTeam={makeTeamSetter(index)}/>
          </>
        ))
                 }
    </>
  );
}


export default App;
