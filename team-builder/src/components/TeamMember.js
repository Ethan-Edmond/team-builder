import React from "react";

function TeamMember ({member}){
  const { name, email, role } = member;
  return (
    <div className="member">
      <h3>{name}</h3>
      <div>
        <h5>Email: {email}</h5>
        <h5>Role: {role}</h5>
      </div>
    </div>
  );
}

export default TeamMember;
