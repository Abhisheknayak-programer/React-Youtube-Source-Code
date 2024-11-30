import logo from "./logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const onClickHandler = () => {
    toast.success("Subscribe to channel", {});
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClickHandler}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ToastContainer
        limit={3}
        position="bottom-left"
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        autoClose={2000}
        closeOnClick
      />
    </div>
  );
}

export default App;
