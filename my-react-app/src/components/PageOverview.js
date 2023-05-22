function PageOverview(props) {
  const { card } = props;

  return (
    <div className="overview-page">
      <h1>Overview Page</h1>
      {card && (
        <div className="card-container">
          <h2 className="card-title">{card.Title}</h2>
          <p className="card-info">Genre: {card.Genre}</p>
          <p className="card-info">Number of Products Left: {card.Quantity}</p>
          <p className="card-info">Description: {card.Description}</p>
          <img src={card.Link} alt={card.Title} className="card-image" />
        </div>
      )}
    </div>
  );
}

export default PageOverview;
