import React ,{useState}from "react";

function Item({ name, category }) {

  const [Cart, setCart]=useState("Add to Cart")
  function handleAddCart() {
    setCart(!Cart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>
        {Cart?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
