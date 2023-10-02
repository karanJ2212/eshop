import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className="Header">
      <div className="header_logo">
        <StorefrontIcon className="logo_img" fontSize="large" />
        <h2 className="logo_title">Eshop</h2>
      </div>

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
          <span className="nav_item1">
            <ShoppingBasketIcon className="basketIcon" />
          </span>
          <span className="nav_item2 basket_count">0</span>
        </div>
      </div>
    </div>
  );
}
