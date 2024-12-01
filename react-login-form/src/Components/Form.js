import React, { useRef, useState } from "react";
import "./Form.css";
import FormFields from "./FormFields";

const Form = (props) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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

  const formSubmitHandler = () => {
    if (
      emailRef.current.includes("@") &&
      emailRef.current.includes(".") &&
      !emailRef.current.includes(" ") &&
      emailRef.current.length >= 6 &&
      passwordRef.current.length >= 6
    ) {
      alert("Login Successfully :)");
    } else alert("Invalid Credentials!");
  };

  return (
    <div className="form_container">
      <h3>{props.formName}</h3>
      <div className="form">
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
      </div>

      <button className="btn" onClick={formSubmitHandler}>
        Login
      </button>
    </div>
  );
};

export default Form;
