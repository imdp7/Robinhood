import React from "react";
import Logo2 from "./Logo2.jpg";
import './Header.css'
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo2} width={55} alt="Robinhood"/>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          {/* <SearchOutlined /> */}
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/Portfolio">PortFolio</a>
        <a href="/Cash">Cash</a>
        <a href="/">Messages</a>
        <Dropdown/>
      </div>
    </div>
  );
}

export default Header;
