import Button from "./Button";
import React, { useState } from "react";
import AddTask from "../addTask/AddTask";
import Tasks from "../tasks/Tasks";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const [input, setInput] = useState([]);
  console.log(input);

  return (
    <div className="container bg-info text-center p-4">
      <h1>Task Tracker</h1>
      <Button toggle={toggle} setToggle={setToggle} />
      {toggle ? <AddTask input={input} setInput={setInput} /> : null}
      <ul>
        {input.map((task) => (
          <React.Fragment key={task.id}>
            <Tasks task={task} setInput={setInput} input={input} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Header;
