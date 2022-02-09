const Button = ({ action }) => {
  return (
    <button className="button button--select" onClick={action}>
      Select all
    </button>
  );
};

export default Button;
