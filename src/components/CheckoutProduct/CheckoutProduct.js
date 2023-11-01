import React from "react";
import "./CheckoutProduct.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectedItems,
  togglecartQty,
} from "../../redux/cartSlice";
export default function CheckoutProduct() {
  const items = useSelector(selectedItems);
  console.log(items);
  // console.log("number of  item in cart", items.length);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      {items.map((item, index) => (
        <div key={item.id} className="checkoutProduct">
          <img src={item.image} alt="" className="checkoutProduct__image" />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{item.title}</p>
            <div className="qty">
              <span className="qty-text">QTY: {item.quantity}</span>
              <div className="qty-change">
                <button
                  className="qty-dec"
                  onClick={() =>
                    dispatch(
                      togglecartQty({
                        id: item.id,
                        type: "dec",
                      })
                    )
                  }
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="qty_value">
                  {item.quantity ? item.quantity : 1}
                </span>
                <button
                  className="qty-inc"
                  onClick={() =>
                    dispatch(
                      togglecartQty({
                        id: item.id,
                        type: "inc",
                      })
                    )
                  }
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <p className="product_price">
              <small>price:$</small>
              <strong>{item.price}</strong>
              <br />
            </p>
            <p className="product_price">
              <small>Sub Total :$</small>
              <strong>{item.totalPrice}</strong>
              <br />
            </p>
            <div className="checkoutProduct__rating">
              <p>⭐</p>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
