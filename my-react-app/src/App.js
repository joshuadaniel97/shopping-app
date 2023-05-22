import "./App.css";

import Header from "./components/Header";
import Catergory from "./components/Catergory";
import Cards from "./components/Cards";
import Carousels from "./components/Carousels";
import Basket from "./components/Basket";
import Wishlist from "./components/Wishlist";
import { useState } from "react";

import PageOverview from "./components/PageOverview";

function App() {
  const cardsData = [
    {
      id: 1,
      Title: "The Last of us",
      Genre: "Survival",
      Quantity: 3,
      Description: "A gripping post-apocalyptic action-adventure game.",
      Age: 18,
      Link: "https://i.ebayimg.com/images/g/i4gAAOSw50xfjJhd/s-l1600.jpg",
      Price: 16,
    },
    {
      id: 2,
      Title: "Warzone",
      Genre: "First Person Shooter",
      Quantity: 10,
      Description:
        "Experience intense multiplayer battles in a modern warfare setting.",
      Age: 18,
      Link: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
      Price: 0,
    },
    {
      id: 3,
      Title: "Grand Theft Auto",
      Genre: "First Person Shooter",
      Quantity: 8,
      Description:
        "Embark on a crime-filled open-world adventure with unparalleled freedom.",
      Age: 18,
      Link: "https://o.aolcdn.com/hss/storage/midas/43c2491af1feedf1f97bf6e92d736bf8/204918370/gtaiv.jpg",
      Price: 50,
    },
    {
      id: 4,
      Title: "NBA 2K23",
      Genre: "Sports",
      Quantity: 3,
      Description:
        "Experience the thrill of basketball with realistic gameplay and stunning visuals.",
      Age: 11,
      Link: "https://assets.2k.com/1a6ngf98576c/435wasAEo74dJUQELhKQUD/29fdd9361099bb3712245b5b226152a7/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-MJ_EDITION-425x535.jpg",
      Price: 45,
    },
    {
      id: 5,
      Title: "Assassins Creed Rogue",
      Genre: "Action-Adventure",
      Quantity: 6,
      Description:
        "Embark on a captivating journey as an Assassin turned Templar in this thrilling historical action-adventure.",
      Age: 18,
      Link: "https://m.media-amazon.com/images/M/MV5BNThlZDllZWMtM2EyMi00ZWQ1LTgyNmYtYWJmZGRkY2Q2YTE2XkEyXkFqcGdeQXVyNDMzODA1OTI@._V1_.jpg",
      Price: 50,
    },
  ];

  const [basketItem, setBasketItem] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [page, setPage] = useState("MainPage");

  const [selectedCard, setSelectedCard] = useState(null);

  const [basketData, setBasketData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [cardData, setCardData] = useState(cardsData);

  const [wishlist, setWishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  console.log("wishlist count", wishlistCount);
  const [showWishlist, setShowWishlist] = useState(false);

  function buttonHandler(item) {
    // for fixing price have a state totalprice
    setBasketItem(basketItem + 1);
    console.log("data", item);
    setBasketData([...basketData, item]);

    setTotalPrice(totalPrice + Number(item.Price));
  }

  const addToWishlist = (item) => {
    setWishlistCount(wishlistCount + 1);
    setWishlist([...wishlist, item]);
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
    setWishlistCount(wishlistCount - 1);
  };

  const showOverViewPage = (card) => {
    setPage("PageOverview");
    setSelectedCard(card);
  };

  const showMainPage = () => {
    setPage("MainPage");
  };

  const showBasket = () => {
    setPage("Basket");
  };

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
    setPage("Wishlist");
  };

  let filteredCards = cardsData.filter((game) =>
    game.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removeCard = (id) => {
    console.log(`item removed: ${id}`);
    const removedCard = cardData.find((card) => card.id === id);
    const newTotalPrice = totalPrice - removedCard.price;
    setCardData(cardData.filter((card) => card.id !== id));
    setTotalPrice(newTotalPrice);
  };

  let currentPage;

  if (page === "MainPage") {
    currentPage = (
      <>
        <Header
          showWishlist={toggleWishlist}
          basket={showBasket}
          orders={basketItem}
          setBasketItem={setBasketItem}
          searchTerm={searchTerm}
          handleSearch={(event) => setSearchTerm(event.target.value)}
          totalPrice={totalPrice}
        />

        <Catergory />
        <Carousels />
        <br />
        <Cards
          cards={filteredCards}
          addToWishlist={addToWishlist}
          basketHandler={buttonHandler}
          buttonHandler={buttonHandler}
          removeHandler={removeCard}
          showOverViewPage={showOverViewPage}
        />
      </>
    );
  } else if (page === "PageOverview") {
    currentPage = (
      <>
        <PageOverview card={selectedCard} />
        <button onClick={showMainPage}>Go back to Main Page</button>
      </>
    );
  } else if (page === "Basket") {
    currentPage = (
      <>
        <Basket basketData={basketData} addWishList={addToWishlist} />
        <button onClick={showMainPage}>Go back to Main Page</button>
      </>
    );
  } else if (page === "Wishlist") {
    currentPage = (
      <>
        <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
        <button onClick={showMainPage}>Go back to Main Page</button>
      </>
    );
  } else {
    currentPage = <div>Something went wrong</div>;
  }

  return <div>{currentPage}</div>;
}
export default App;
