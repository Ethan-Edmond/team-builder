import React, { useState } from "react";
import Form from "./Form";

function TeamMember ({member, setMember}){
  const { name, email, role } = member;

  const formSubmit = (formMember, resetcb) => {
    let newMember = {
      name: formMember.name.trim(),
      email: formMember.email.trim(),
      role: formMember.role
    };

    if (newMember.name.length && newMember.email.length && newMember.role.length){
      setMember(newMember);
      resetcb();
    }
  };

  return (
    <div className="member">
      <h3>{name}</h3>
      <div>
        <h5>Email: {email}</h5>
        <h5>Role: {role}</h5>
      </div>
      <button onClick={e => setMember({...member, name: "AAAAAAA"})}>Edit Member</button>
      <Form submit={formSubmit}/>
    </div>
  );
}

export default TeamMember;
