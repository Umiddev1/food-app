import React, { useState } from "react";
import { hotDishes } from "../assets/data/Dishes";
import { coldDishes } from "../assets/data/Dishes";
import { soup } from "../assets/data/Dishes";
import { grill } from "../assets/data/Dishes";
import { appetizer } from "../assets/data/Dishes";
import { dessert } from "../assets/data/Dishes";
import Item from "../component/Item";
import './Home.css';
function Home() {
  const [arr, setArr] = useState(hotDishes);
  console.log(arr);
  function handleArr(text) {
    console.log(text);
  }
  return (
    <div className="home">
      <div className="home__des">
        <div className="home__titles">
          <h2 className="home__title">Jaegar Resto</h2>
          <p className="home__text">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="home__inps">
        <input className="home__inp" type="search" placeholder="Search for food, coffe, etc.." />
        <i className="far fa-search search"></i>
        </div>
      </div>
      <div className="home__nav">
        <ul className="home__nav-list p-0">
          <li onClick={() => handleArr("Hot Dishes")} className="home__nav-item"><a className="home__nav-link" href="#">Hot Dishes</a></li>
          <li onClick={() => handleArr("Cold Dishes")} className="home__nav-item"><a className="home__nav-link" href="#">Cold Dishes</a></li>
          <li onClick={() => handleArr("Soup")} className="home__nav-item"><a className="home__nav-link" href="#">Soup</a></li>
          <li onClick={() => handleArr("Grill")} className="home__nav-item"><a className="home__nav-link" href="#">Grill</a></li>
          <li onClick={() => handleArr("Apper")} className="home__nav-item"><a className="home__nav-link" href="#">Appetizer</a></li>
          <li onClick={() => handleArr("Dessert")} className="home__nav-item"><a className="home__nav-link" href="#">Dessert</a></li>
        </ul>
        <div className="home__nav-result result">
          <h2 className="result__title">Choose Dishes Dine In</h2>
            <ul className="result__list p-0"> 
              {
                arr.map((items, index) => (
                  <Item 
                  key={index}
                  img={items.foodImg}
                  name={items.foodName}
                  price={items.foodPrice}
                  aviable={items.isAvailable}
                  />
                
                ))
              }
            </ul>
        </div>
        <div>hello</div>
      </div>
    </div>
  )
}
export default Home