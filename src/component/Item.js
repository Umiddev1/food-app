import React from "react";
import './Item.css'
function Item({img, name, price, aviable}) {
  return (
    <li className="result__item">
      <div className="result__inner">
        <img className="result__img" src={img} alt="img" />
        <div className="result__des text-center p-0">
          <p className="result__name p-0">{name}</p>
          <p className="result__price p-0">{price}</p>
          <p className="result__aviable p-0">{aviable}</p>
        </div>
      </div>
    </li>
  )
}

export default Item;