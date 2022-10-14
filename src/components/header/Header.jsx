import Button from "./Button";
import React, { useState } from "react";
import AddTask from "../addTask/AddTask";
import Tasks from "../tasks/Tasks";

const taskArr = [];
const Header = () => {
  const [toggle, setToggle] = useState(true);

  const [input, setInput] = useState({
    task: "",
    date: "",
  });
  const [saveClick, setSaveClick] = useState(false);
  if (saveClick) {
    taskArr.push(input);
    setSaveClick(false);
  }
  return (
    <div className="container bg-info text-center p-4">
      <h1>Task Tracker</h1>
      <Button toggle={toggle} setToggle={setToggle} />
      {toggle ? (
        <AddTask
          saveClick={saveClick}
          setSaveClick={setSaveClick}
          input={input}
          setInput={setInput}
        />
      ) : null}
      <Tasks arr={taskArr} />
    </div>
  );
};

export default Header;
