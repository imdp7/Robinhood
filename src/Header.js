import React, {useContext} from "react";
import './Header.css'
import {UserContext} from './Providers/UserContext'
import {Link} from 'react-router-dom'
import Dropdown from "./Dropdown";
import SearchStock from './SearchStock'

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between space-y-2 items-center text-center p-3 max-w-7xl mx-auto">
      <div className="w-12 object-contain items-center">
       <Link to='/'><img src="https://cdn-images-1.medium.com/max/1200/1*d7fYAnWUS9rDntWGdABxPw.png" alt="Robinhood"/></Link> 
      </div>
      <div className="flex items-center space-x-5 max-w-screen-8xl">
        <SearchStock/>
      </div>
      <div className=" group flex space-x-12 items-center">
        <div className="hidden lg:inline-flex items-center space-x-5 font-bold">
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/Cash">Cash</a>
        <a href="/">Messages</a>
        </div>
        <div className="">
        <Dropdown  user={user}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
