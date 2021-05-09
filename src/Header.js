import React, {useContext} from "react";
import Logo from './robinhood.svg'
import './Header.css'
import { UserContext } from "./Providers/UserContext"
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import {Link} from 'react-router-dom'
import Dropdown from "./Dropdown";
import SearchStock from './SearchStock'

function Header() {
  const user = useContext(UserContext);
  const {displayName, email,photoURL} = user;

  return (
    <div className="header__wrapper">
      <div className="header__logo" style={{paddingLeft:'60px'}}>
       <Link to='/'><img src={Logo} width={25} alt="Robinhood"/></Link> 
      </div>
      <div className="header__search">
      <SearchStock/>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/Cash">Cash</a>
        <a href="/">Messages</a>
        <Dropdown name={displayName}/>
      </div>
    </div>
  );
}

export default Header;
