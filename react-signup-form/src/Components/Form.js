import React, { useRef, useState } from "react";
import "./Form.css";
import FormFields from "./FormFields";

const Form = (props) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cPasswordError, setCPasswordError] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const nameChangeHandler = (event) => {
    event.target.value.trim().split(" ").length <= 1
      ? setNameError(true)
      : setNameError(false);
    nameRef.current = event.target.value;
  };

  const emailChangeHandler = (event) => {
    event.target.value.includes("@") &&
    event.target.value.includes(".") &&
    !event.target.value.includes(" ") &&
    event.target.value.length >= 6
      ? setEmailError(false)
      : setEmailError(true);

    emailRef.current = event.target.value;
  };

  const passwordChangeHandler = (event) => {
    event.target.value.length >= 6
      ? setPasswordError(false)
      : setPasswordError(true);
    passwordRef.current = event.target.value;
  };

  const confirmPasswordChangeHandler = (event) => {
    console.log(event.target.value, passwordRef.current);
    event.target.value === passwordRef.current
      ? setCPasswordError(false)
      : setCPasswordError(true);
  };

  const formSubmitHandler = () => {
    if (
      nameRef.current.trim().split(" ").length > 1 &&
      emailRef.current.includes("@") &&
      emailRef.current.includes(".") &&
      !emailRef.current.includes(" ") &&
      emailRef.current.length >= 6 &&
      passwordRef.current.length >= 6
    ) {
      alert("Form Submitted Successfully :)");
    } else alert("Invalid Form Entry!");
  };

  return (
    <div className="form_container">
      <h3>{props.formName}</h3>
      <div className="form">
        <FormFields
          onChange={nameChangeHandler}
          name="Username"
          placeholder="Abhishek Nayak"
          type="text"
          isError={nameError}
          errorMessage={"Invalid Name! Please Enter Full Name"}
        />
        <FormFields
          onChange={emailChangeHandler}
          name="Email"
          placeholder="abhishek@mail.com"
          type="email"
          isError={emailError}
          errorMessage={"Invalid Email Address!"}
        />
        <FormFields
          onChange={passwordChangeHandler}
          name="Password"
          placeholder="********"
          type="password"
          isError={passwordError}
          errorMessage={"Invalid Password!"}
        />
        <FormFields
          onChange={confirmPasswordChangeHandler}
          name="Confirm Password"
          placeholder="********"
          type="password"
          isError={cPasswordError}
          errorMessage={"Password Does Not Match!"}
        />
      </div>

      <button className="btn" onClick={formSubmitHandler}>
        Sign Up
      </button>
    </div>
  );
};

export default Form;
