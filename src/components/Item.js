import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleInCartClick() {
    setInCart(!inCart);
  }

  
  const className = inCart ? "in-cart" : "";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => handleInCartClick()}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
