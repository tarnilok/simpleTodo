import React, { useState } from "react";
const Tasks = ({ task, input, setInput }) => {
  const style = {
    borderLeft: task.isDone ? "4px solid red" : "none",
    textDecoration: task.isDone ? "line-through" : "none",
  };
  return (
    <li
      onClick={() =>
        // (
        //   input.map((item) =>
        //     item.id === task.id ? (item.isDone = !item.isDone) : null
        //   ),
        //   setInput([...input])
        // )
        setInput(
          input.map(
            (item) =>
              item.id === task.id && [...{ ...item, isDone: !item.isDone }]
          )
        )
      }
      key={task.id}
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
  );
};

export default Tasks;
