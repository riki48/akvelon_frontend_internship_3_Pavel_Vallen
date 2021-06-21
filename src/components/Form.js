import React, { useState } from "react";
import "../Form.css";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const NameRegExp = /^[a-zA-Z\s]{1,120}$/;
  const EmailRegExp = /^\S+@\S+$/;
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (validate())
      console.log(
        `You've just submitted a form: 
                Name: ${name} 
                Email: ${email} 
                Password: ${pass}`
      );
  };
  const validate = () => {
    const validateName = NameRegExp.test(name);
    const validateEmail = EmailRegExp.test(email);
    const validatePass = pass.length >= 8;
    const validateFieldsAreNotEmpty = pass && name && email != "";
    const error = `
        ${validateName ? "" : "Name: should be a name"}
        ${validateEmail ? "" : "Email: please enter a valid email"}
        ${validatePass ? "" : "Password: must be at least 8 characters long"}
        ${validateFieldsAreNotEmpty ? "" : "All fields should be filled"}`.trim(
      ""
    );
    if (error === "") return true;
    else {
      alert(error);
      return false;
    }
  };
  return (
    <div className="wrapper">
      <h1 className="title">Register</h1>
      <div className="form-wrapper">
        <form noValidate action="" onSubmit={submitHandler} className="form">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={nameHandler}
            className="formInput"
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={emailHandler}
            className="formInput"
          />
          <label>Password:</label>
          <input
            type="text"
            value={pass}
            onChange={passHandler}
            className="formInput"
          />

          <input type="submit" value="Sign Up" className="form-btn" />
        </form>
      </div>
    </div>
  );
}
export default Form;
