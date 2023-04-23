import "./App.css";
// import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Catergory from "./components/Catergory";
import Cards from "./components/Cards";
import Carousels from "./components/Carousels";
import { useState } from "react";




function App() {
  

  const cardsData = [
    {
      Title: "The Last of us",
      Genre: "Survival",
      Age: 18,
      Link: "https://i.ebayimg.com/images/g/i4gAAOSw50xfjJhd/s-l1600.jpg"
    },
    {
      Title: "Warzone",
      Genre: "First Person Shooter",
      Age: 18,
      Link: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg"
    },
    {
      Title: "Grand Theft Auto",
      Genre: "First Person Shooter",
      Age: 18,
      Link: "https://o.aolcdn.com/hss/storage/midas/43c2491af1feedf1f97bf6e92d736bf8/204918370/gtaiv.jpg"
    }
  ];

  function buttonHandler(item) {
    setBasketItem(item + 1);
    console.log("Button clicked");
  }

  const [basketItem, setBasketItem] = useState(0);

  return (
   <div>
  
    
      <Header orders={basketItem} setBasketItem={setBasketItem} />
      <Catergory />
      <Carousels />
      <br />
      <Cards cards={cardsData} buttonHandler={() => buttonHandler(basketItem)} />
    </div>
  );
}

export default App;
