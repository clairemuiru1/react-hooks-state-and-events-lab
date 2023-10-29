import React ,{useState}from "react";

function Item({ name, category }) {

  const [Cart, setCart]=useState("Add to Cart")
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
