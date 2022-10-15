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
        setInput((list) =>
          list.map((item) =>
            item.id === task.id
              ? { ...item, isDone: !item.isDone }
              : { ...item }
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
        onClick={() => setInput(input.filter((todo) => todo.id !== task.id))}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
};

export default Tasks;
