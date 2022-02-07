import React, {useContext} from "react";
import Logo from './Logo.png'
import './Header.css'
import {UserContext} from './Providers/UserContext'
import {Link} from 'react-router-dom'
import Dropdown from "./Dropdown";
import SearchStock from './SearchStock'

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header__wrapper">
      <div className="pl-5">
       <Link to='/'><img src={Logo} width={45} alt="Robinhood"/></Link> 
      </div>
      <div className="">
        <SearchStock/>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/Cash">Cash</a>
        <a href="/">Messages</a>
        <Dropdown user={user}/>
      </div>
    </div>
  );
}

export default Header;
