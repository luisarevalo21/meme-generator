const Star = ({ isFilled, toggleFavorite }) => {
  const starIcon = isFilled ? "star-filled.png" : "star-empty.png";

  console.log(isFilled);
  return <img className="card--favorite" alt={`${isFilled}`} onClick={toggleFavorite} />;
};

export default Star;
