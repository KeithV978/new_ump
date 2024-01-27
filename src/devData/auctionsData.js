import {v4 as uuid} from "uuid"

import car from "../Assets/Images/productImage/camry.webp";
import car1 from "../Assets/Images/productImage/camry1.webp";
import car2 from "../Assets/Images/productImage/camry2.webp";
import car3 from "../Assets/Images/productImage/camry3.webp";
import car4 from "../Assets/Images/productImage/camry4.webp";
import car5 from "../Assets/Images/productImage/camry5.webp";

import mattress from "../Assets/Images/productImage/mattress.jpeg";

import selfcon from "../Assets/Images/productImage/selfcon.jpg";
import selfcon1 from "../Assets/Images/productImage/selfcon2.jpeg";


export const auctionsData = [
  {
    id: uuid(),
    category: "cars",
    auctioner: "Peter",
    auctionersId: uuid(),
    product_details: {
      item_headline: "Toyota Camry 2014",
      imageCollection: [car, car1, car2, car3, car4, car5],
      description: "A car and more...",
    },
    bids: [{ bidder: "08152038183", bid: 25 }],
    highest_bid: 3000000,
    expiry_date: new Date("2023-12-31T23:59:59").getTime(),
    dateAdded: new Date().getTime(),
    status: "Active",
    // Active or ended,
  },
  {
    id: uuid(), 
    category: "furniture",
    auctioner: "Pedro",
    auctionersId: uuid(),
    product_details: {
      item_headline: "6x6 Mouka Flora Mattress",
      imageCollection: [mattress],
      description: "A little sleep, a little slumber, a little folding of the hand to sleep...",
    },
    bids: [{ bidder: "08152038183", bid: 25 }],
    highest_bid: 25000,
    expiry_date: new Date("2023-10-31T23:59:59").getTime(),
    dateAdded: new Date().getTime(),
    status: "Active",
    // Active or ended,
  },
  {
    id: uuid(), 
    category: "real_estate",
    auctioner: "King",
    auctionersId:  uuid(), 
    product_details: {
      item_headline: "Self Contained in BDPA",
      imageCollection: [selfcon, selfcon1],
      description: "Live in the house",
    },
    bids: [{ bidder: "08152038183", bid: 25 }],
    highest_bid: 130000,
    expiry_date: new Date("2023-11-31T23:59:59").getTime(),
    dateAdded: new Date().getTime(),
    status: "Active",
    // Active or ended,
  },
  {
    id: uuid(), 
    category: "",
    auctioner: "",
    auctionersId: "",
    product_details: {
      item_headline: "",
      imageCollection: [car, car1, car2, car3, car4, car5],
      description: "",
    },
    bids: [{ bidder: "08152038183", bid: 25 }],
    highest_bid: 0,
    expiry_date: new Date().getTime(),
    dateAdded: new Date().getTime(),
    status: "Active",
    // Active or ended,
  },
  {
    id: uuid(), 
    category: "",
    auctioner: "",
    auctionersId: "",
    product_details: {
      item_headline: "",
      imageCollection: [car, car1, car2, car3, car4, car5],
      description: "",
    },
    bids: [{ bidder: "08152038183", bid: 25 }],
    highest_bid: 0,
    expiry_date: new Date().getTime(),
    dateAdded: new Date().getTime(),
    status: "Ended",
    // Active or ended,
  },
];
