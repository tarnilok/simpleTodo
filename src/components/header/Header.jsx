import Button from "./Button";
import React, { useState } from "react";
import AddTask from "../addTask/AddTask";
import Tasks from "../tasks/Tasks";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState([]);
  console.log(input);

  return (
    <div
      className="container d-flex flex-column  p-4 mh-100 rounded"
      style={{
        minWidth: "300px",
        maxWidth: "600px",
        background: "linear-gradient(to right bottom, #E70077, #F3AFD1)",
      }}
    >
      <h1 className="mx-auto">Task Tracker</h1>
      <Button toggle={toggle} setToggle={setToggle} />
      {toggle && <AddTask input={input} setInput={setInput} />}
      {!!input.length && (
        <ul className="d-flex flex-column gap-3 p-0 flex-1 overflow-auto">
          {input.map((task) => (
            <React.Fragment key={task.id}>
              <Tasks task={task} setInput={setInput} input={input} />
            </React.Fragment>
          ))}
        </ul>
      )}
      {!input.length && (
        <div className="mx-auto" style={{ fontWeight: "bold" }}>
          No Tasks to Show
        </div>
      )}
    </div>
  );
};

export default Header;
