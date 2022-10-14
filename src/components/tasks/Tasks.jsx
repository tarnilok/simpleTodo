import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({ arr }) => {
  const [done, setDone] = useState(false);
  const style = {
    borderLeft: done ? "4px solid red" : "none",
    textDecoration: done ? "line-through" : "none",
  };
  return (
    <>
      <ul>
        {arr.map((task) => (
          <li
            onClick={() => setDone(!done)}
            key={Date.now()}
            style={style}
            className="bg-white p-3 list-unstyled d-flex justify-content-between "
          >
            <span>
              <strong>{task.task}</strong> <br />
              {task.date}
            </span>
            <button
              onClick={(e) => e.target.parentNode.remove()}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
