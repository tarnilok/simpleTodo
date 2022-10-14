const Button = ({ setToggle, toggle }) => {
  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={
        toggle ? "btn btn-danger mt-3 mb-4" : "btn btn-success mt-3 mb-4"
      }
    >
      {toggle ? "Close" : "Open"} Add Task Bar
    </button>
  );
};

export default Button;
