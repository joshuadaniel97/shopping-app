import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import ButtonClick from "./ButtonClick";
import OverviewBtn from "./OverviewBtn";

function Cards(props) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.cards.map((card) => (
          <div className="col" key={card.id}>
            <div className="card">
              <img
                src={card.Link}
                className="card-img-top"
                alt="..."
                height="260px"
              />
              <div className="card-body">
                <h2 className="card-title">{card.Title}</h2>
                <h4 className="card-text">Game type: {card.Genre}</h4>
                <p>Age: {card.Age}</p>
                <p>Price: £{card.Price}</p>
                <ButtonClick buttonHandler={() => props.buttonHandler(card)} />
                
                <OverviewBtn showOverViewPage={() => props.showOverViewPage(card)} />
                <br/>
                <button onClick={() => props.addToWishlist(card)}>
                   Add to Wishlist
                   
                </button>
                <br/>
                <br />
                <button
                  onClick={() => {
                    console.log(card.id);
                    props.removeHandler(card.id);
                  }}
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;