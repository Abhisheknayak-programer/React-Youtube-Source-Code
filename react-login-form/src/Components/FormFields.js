import React from "react";

const FormFields = (props) => {
  return (
    <div className="form__field">
      {props.isError && <span className="error">{props.errorMessage}</span>}
      <div className="form__entry">
        <label htmlFor={props.name}>{props.name}</label>
        <input
          onChange={props.onChange}
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default FormFields;
