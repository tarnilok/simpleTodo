import React from "react";

const AddTask = ({ input, setInput, setSaveClick }) => {
  const { task, date } = input;
  return (
    <div className="mt-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaveClick(true);
        }}
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            onChange={(e) => setInput({ ...input, task: e.target.value })}
            value={task}
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
            onChange={(e) => setInput({ ...input, date: e.target.value })}
            value={date}
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
