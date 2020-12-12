import React from "react";
import white_logo from "./white_logo.png";
import './Header.css'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import {Link} from 'react-router-dom'
import Dropdown from "./Dropdown";
import SearchStock from './SearchStock'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
       <Link to='/'><img src={white_logo} width={150} alt="Robinhood"/></Link> 
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="search" />
          {/* <SearchStock/> */}
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/Cash">Cash</a>
        <a href="/">Messages</a>
        <Dropdown/>
      </div>
    </div>
  );
}

export default Header;
