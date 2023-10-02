import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="Product">
      <div className="Product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
          <br />
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((star, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="addToBasket">Add to basket</button>
      </div>
      <div className="image_container">
        <img className="product_image" src={image} alt="product" />
      </div>
    </div>
  );
}

export default Product;
