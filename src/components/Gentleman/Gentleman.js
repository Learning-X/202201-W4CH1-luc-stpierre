const Gentleman = ({ gentleman, action, deleteAction }) => {
  const getInitial = (name) => {
    const splitName = name.split(" ");
    return splitName[0].length <= 3
      ? splitName[1][0].toUpperCase()
      : splitName[0][0].toUpperCase();
  };

  const initialLetter = getInitial(gentleman.name);

  const gentlemanClass = gentleman.selected
    ? "gentleman selected"
    : "gentleman";

  return (
    <li className={gentlemanClass} onClick={action}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gentleman.picture}`}
          alt={`${gentleman.name} pointing at you`}
        />
        <span className="gentleman__initial">{initialLetter}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={deleteAction}
      ></i>
    </li>
  );
};

export default Gentleman;
