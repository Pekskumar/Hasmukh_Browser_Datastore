import React, { useEffect } from "react";
import TaskBoard from "./TaskBoard";
import { ToastContainer } from "react-toastify";
import moment from "moment";

const App = () => {
  return (
    <>
      <ToastContainer
        containerId="an id"
        draggable={false}
        pauseOnFocusLoss={false}
        autoClose={3000}
      />
      <div className="app">
        <div className="board-title">
          <div>
            <h1 className="m-0">Browser DataSTORE</h1>
            <span>All Data remove in 2 Min.</span>
          </div>
          <h5 className="m-0">{moment().format("LLLL")}</h5>
        </div>
        <TaskBoard />
      </div>
    </>
  );
};

export default App;
