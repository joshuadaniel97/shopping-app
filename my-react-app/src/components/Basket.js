import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

function Basket(props) {
  return (
    <>
    <div>
    <FontAwesomeIcon icon={faHeart} style={{color: "#010204",}}
    onClick={() => props.addWishList()} 
    
    />
    
    
    </div>
    
    <div className="basket-btn">
      <FontAwesomeIcon
        icon={faBasketShopping}
        style={{ color: "#060307" }}
        onClick={() => props.basket()}
      />
   

      {props.orders}
      {props.basketData && props.basketData.length > 0 && (
        <div>
          {props.basketData.map((card) => (
            <div
              className="row row-cols-1 row-cols-md-3 g-4"
              key={card.id}
            >
              <div className="col">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Basket;
