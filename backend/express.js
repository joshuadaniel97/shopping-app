import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

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

const basket = [];

app.get("/", (req, res) => {
  res.send("hello world!");
});

// home page with product items
app.get("/home", (req, res) => {
  res.send(cardsData);
});

app.get("/overview/:id", (req, res) => {
  const overviewId = req.params.id;
  const overviewItem = cardsData.find(
    (product) => product.id == Number(overviewId)
  );
  console.log(typeof overviewId);
  console.log("Item:", overviewItem);
});

// add to basket
app.post("/addtobasket/:id", (req, res) => {
  const overviewId = req.params.id;
  const overviewItem = cardsData.find((product) => product.id == overviewId);
  basket.push(overviewItem);
  console.log(basket);
  res.send(basket);
});

app.get("/basket/:id", (req, res) => {
  res.send(basket);
});

app.delete("/removefromcart", (req, res) => {
  const productId = req.params.id;
  const product = cardsData.find((product) => product.id !== Number(productId));
  res.send(product);
});

app.listen(4000, function (req, res) {
  console.log("listening on port 4000");
});
