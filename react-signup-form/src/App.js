import React from "react";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="main__container">
      <div className="image__container">
        <img src="./img.svg" alt="login" />
      </div>
      <Form formName={"Register Now"} />
    </div>
  );
};

export default App;
