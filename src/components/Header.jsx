import React, { useContext, useState } from "react";
import Menu from "./Menu";
import AppContext from "@context/AppContext";
import MyOrder from '@containers/MyOrder';
import HeaderMobile from "@components/HeaderMobile";
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_menu from '@icons/icon_menu.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import '@styles/Header.scss';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenuMobile, setToggleMobileMenu] = useState(false);
  const { state } = useContext(AppContext);

  const handleClick = () => {
    if(toggleOrders === true){
      setToggleOrders(!toggleOrders)
      setToggle(!toggle)
    } else {
      setToggle(!toggle)
    }
  }
  const handleOrders = () => {
    if(toggle === true){
      setToggle(!toggle)
      setToggleOrders(!toggleOrders)
    }
    if(toggleMenuMobile === true){
      setToggleMobileMenu(!toggleMenuMobile)
      setToggleOrders(!toggleOrders)
    }else{
      setToggleOrders(!toggleOrders)
    }
  }
  const handleMenuMobile = () => {
    if(toggleOrders === true){
      setToggleOrders(!toggleOrders)
      setToggleMobileMenu(!toggleMenuMobile)
    } else {
      setToggleMobileMenu(!toggleMenuMobile)
    }
  }
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" onClick={handleMenuMobile}/>

      <div className="navbar-left">
        <img src={logo_yard_sale} alt="nav-logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleClick}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleOrders}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            <div>{state.cart.length > 9 ? `+9` : state.cart.length > 0 ? state.cart.length : 0}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
      {toggleMenuMobile && <HeaderMobile/>}
    </nav>
  );
};

export default Header;
