import React, { useState } from "react";

const AddTask = ({ input, setInput }) => {
  const [addTask, setAddTask] = useState("");
  const [addDate, setAddDate] = useState("");
  return (
    <div className="mt-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInput([
            ...input,
            { id: Date.now(), isDone: false, task: addTask, date: addDate },
          ]);
          console.log(e.target);
        }}
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            onChange={(e) => setAddTask(e.target.value)}
            value={addTask}
            type="text"
            className="form-control"
            id="task"
            aria-describedby="taskHelp"
            placeholder="Add Task"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Day & Time
          </label>
          <input
            onChange={(e) => {
              setAddDate(e.target.value);
              console.log(e.target);
            }}
            value={addDate}
            type="text"
            className="form-control"
            id="date"
            placeholder="Add Day & Time"
            required
          />
        </div>

        <button type="submit" className="btn btn-warning w-100 mb-4 mt-3">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
