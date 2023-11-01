import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectedItems, selectedTotal } from "../../redux/cartSlice";

export default function Subtotal() {
  const total = useSelector(selectedTotal);

  const items = useSelector(selectedItems);
  // console.log("number of  item in cart", items.length);

  console.log(total);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(total) => (
          <>
            <p>
              Subtotal ({items.length}): <strong>{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType="text"
        thousandSeparator={true}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
