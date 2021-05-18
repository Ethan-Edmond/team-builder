import React from "react";

function Form ({value, submit, update}){

  const onChange = (event) => {
    update(event.target.name, event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={value.name}
        onChange={onChange}/>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={value.email}
        onChange={onChange}/>
      <select name="role" onChange={onChange} value={value.role}>
        <option value="">--- Select a role ---</option>
        <option value="Front End Engineer">Front End Engineer</option>
        <option value="Designer">Designer</option>
        <option value="Back End Engineer">Back End Engineer</option>
        <option value="Database Engineer">Database Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Schmoftware Schmengineer">Schmoftware Schmengineer</option>
        <option value="Wetware Engineer">Wetware Engineer</option>
        <option value="Hardware Engineer">Hardware Engineer</option>
        <option value="Firmware Engineer">Firmware Engineer</option>
        <option value="Vaporware Engineer">Vaporware Engineer</option>
        <option value="Malware Engineer">Malware Engineer</option>
      </select>
      <button disabled={!(value.name.length && value.email.length && value.role.length)}>Submit</button>
    </form>
  );
}

export default Form;
