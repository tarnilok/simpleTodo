const Tasks = ({ task, input, setInput }) => {
  const style = {
    borderLeft: task.isDone ? "4px solid red" : "none",
    textDecoration: task.isDone ? "line-through" : "none",
  };
  return (
    <li
      key={task.id}
      style={style}
      className="bg-white list-unstyled d-flex p-3 gap-3"
    >
      <div
        onClick={() => {
          const index = input.findIndex((item) => item.id === task.id);
          input[index].isDone = !input[index].isDone;
          setInput([...input]);
        }}
        className="flex-grow-1 d-flex flex-column align-items-start"
      >
        <div style={{ fontWeight: "bold" }}>{task.task}</div>
        <div>{task.date}</div>
      </div>

      <button
        onClick={() => setInput(input.filter((todo) => todo.id !== task.id))}
        type="button"
        className="btn-close"
        style={{ filter: "red" }}
        aria-label="Close"
      />
    </li>
  );
};

export default Tasks;
