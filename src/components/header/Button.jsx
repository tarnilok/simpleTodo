const Button = ({ setToggle, toggle }) => {
  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={
        toggle
          ? "btn btn-danger mt-3 mb-4 w-50 mx-auto"
          : "btn btn-success mt-3 mb-4 w-50 mx-auto"
      }
    >
      {toggle ? "Close" : "Open"} Add Task Bar
    </button>
  );
};

export default Button;
