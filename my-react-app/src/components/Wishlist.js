import React from "react";

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div>
      <h1>Wishlist</h1>
      <p>Number of items in wishlist: {wishlist.length}</p>
      {wishlist.length === 0 ? (
        <p>No items in the wishlist</p>
      ) : (
        <ul>
          {wishlist.map((card) => (
            <li key={card.id}>
              <h2>{card.Title}</h2>
              <p>Genre: {card.Genre}</p>
              <button onClick={() => removeFromWishlist(card.id)}>
                Remove from Wishlist
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;