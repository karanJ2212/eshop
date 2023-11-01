import React, { useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const product = { id, title, image, price, rating };
  const addToBasket = (product) => {
    let totalPrice = qty * product.price;

    dispatch(
      addToCart({
        ...product,
        quantity: qty,
        totalPrice: totalPrice,
      })
    );
  };

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
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className="addToBasket" onClick={() => addToBasket(product)}>
          Add to basket
        </button>
      </div>
      <div className="image_container">
        <img className="product_image" src={image} alt="product" />
      </div>
    </div>
  );
}

export default Product;
