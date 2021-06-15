import React, { useState }from "react";

import TeamMember from "./TeamMember";
import Form from "./Form";

function Team({team, setTeam}) {
  const [memberToEdit, setMemberToEdit] = useState();

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

  function makeMemberSetter (index){
    return (member) => {
      let newTeam = [...team];
      newTeam[index] = member;
      setTeam(newTeam);
    };
  }

  return (
    <>
      <h2>Add Member</h2>
      <Form submit={formSubmit}/>
      <h2>Current Team</h2>
      {team.map((member, index) => (
        <TeamMember
          key={index}
          member={member}
          setMember={makeMemberSetter(index)}
          setMemberToEdit={setMemberToEdit}
          isEditing={member === memberToEdit}
        />))}
    </>
  );
}

export default Team;
