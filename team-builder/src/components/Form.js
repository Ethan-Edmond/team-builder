import React from "react";

function Form (props){

  return (
    <form>
      <input type="text" name="name" placeholder="Name"/>
      <input type="email" name="email" placeholder="Email"/>
      <select>
        <option value="">--- Select a role ---</option>
        <option value="Front End Engineer">Front End Engineer</option>
        <option value="Designer">Designer</option>
        <option value="Back End Engineer">Back End Engineer</option>
        <option value="Database Engineer">Database Engineer</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default Form;
