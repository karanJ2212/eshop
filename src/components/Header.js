import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedItems } from "../redux/cartSlice";

export default function Header() {
  const items = useSelector(selectedItems);

  return (
    <div className="Header">
      <Link to="/">
        <div className="header_logo">
          <StorefrontIcon className="logo_img" fontSize="large" />
          <h2 className="logo_title">Eshop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_search_bar" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_item1">Hello guest</span>
          <span className="nav_item2">Sign In</span>
        </div>

        <div className="nav_item">
          <span className="nav_item1">your</span>
          <span className="nav_item2">cart</span>
        </div>
        <div className="nav_itemBasket">
          <Link to="/Checkout">
            <span className="nav_item1">
              <ShoppingBasketIcon className="basketIcon" />
            </span>
          </Link>
          <span className="nav_item2 basket_count">{items.length}</span>
        </div>
      </div>
    </div>
  );
}
