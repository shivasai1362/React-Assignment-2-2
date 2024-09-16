import React, { useEffect, useState } from "react";
import "./Product.css";

function Product(props) {
  let colorCateg = ['#22c55e', '#2775c3', '#ff3e00', '#222222']
  
  const [randColor, setRandColor] = useState("");

  useEffect(()=> {
    const random = Math.floor(Math.random()*colorCateg.length)
    setRandColor(colorCateg[random]);
    //console.log(randColor);
  },[]);

  return (
    <div className="card">
      <h3 className="title">{props.prodList.title}</h3>
      <div className="image"><img  src={props.prodList.image} alt="" /></div>
      <p className="desc">{props.prodList.description}</p>
      <h4 className="price">$ {props.prodList.price}</h4>
      <div className="rating">
        <p className="rate">Rating: {props.prodList.rating.rate}</p>
        <p className="count">Count: {props.prodList.rating.count}</p>
      </div>
      <div style={{background: `${randColor}`}} className="category">
        <p>#{props.prodList.category}</p>
      </div>
    </div>
  );
}

export default Product;
