import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const SaveInlocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const tempItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      console.log("tempItem", tempItem);
      if (tempItem) {
        console.log(tempItem);
        const tempCart = state.items.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let totalPrice = newQty * item.price;
            return { ...item, quantity: newQty, totalPrice: totalPrice };
          } else return item;
        });
        state.items = tempCart;
        SaveInlocalStorage(state.items);
      } else {
        state.items.push(action.payload);
        SaveInlocalStorage([...state.items]);
      }
    },
    removeFromCart: (state, action) => {
      const itemid = action.payload;
      state.items = state.items.filter((item) => item.id !== itemid);
      console.log("removecartreducer", state.items);
      SaveInlocalStorage([...state.items]);
    },

    togglecartQty: (state, action) => {
      const tempCart = state.items.map((item) => {
        if (item.id === action.payload.id) {
          let newQty = item.quantity;
          let newTotal = item.totalPrice;

          if (action.payload.type === "inc") {
            newQty++;
            newTotal = newQty * item.price;
          } else if (action.payload.type === "dec" && newQty > 1) {
            newQty--;
            newTotal = newQty * item.price;
          }

          return { ...item, quantity: newQty, totalPrice: newTotal };
        }
        return item;
      });
      state.items = tempCart;
      SaveInlocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, togglecartQty } = cartSlice.actions;

export const selectedItems = (state) => {
  // Retrieve data from local storage and parse it
  const localStorageItems = JSON.parse(localStorage.getItem("cart"));

  // If there are items in local storage, return them; otherwise, return the state items
  return localStorageItems ? localStorageItems : state.cart.items;
};

export const selectedTotal = (state) => {
  const localStorageItems = JSON.parse(localStorage.getItem("cart"));

  return localStorageItems.reduce((total, item) => total + item.totalPrice, 0);
};

export default cartSlice.reducer;
