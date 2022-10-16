import React from "react";

const AddTask = ({ input, setInput }) => {
  return (
    <div className="mt-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { task, date } = e.target;
          let dateData = date.value.replace("T", " ");
          const isPast = Date.now() > new Date(date.value).getTime();
          console.log(isPast);
          if (task.value && date.value && !isPast)
            setInput([
              ...input,
              {
                id: Date.now(),
                isDone: false,
                task: task.value,
                date: dateData,
              },
            ]);
          !task.value
            ? (task.style.outline = "3px solid blue")
            : (task.style.outline = "");
          !date.value || isPast
            ? (date.style.outline = "3px solid blue")
            : (date.style.outline = "");
          if (task.value && date.value && !isPast) {
            date.value = "";
            task.value = "";
          }
        }}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-label w-100">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            name="task"
            aria-describedby="taskHelp"
            placeholder="Add Task"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label w-100 text-left">
            Day & Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            name="date"
            placeholder="Add Day & Time"
            required
          />
        </div>

        <button
          type="submit"
          className="btn w-100 mb-4 mt-3 text-white"
          style={{ background: "#810089" }}
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
