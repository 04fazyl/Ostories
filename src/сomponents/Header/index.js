import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import s from "./Header.module.scss";

const Header = (props) => {
  const { fovorite, cart } = React.useContext(AppContext);
  return (
    <div className={s.header}>
      <div className={s.top}>
        <div className={s.column}>
          <menu className={s.menu}>
            <img
              onClick={props.showMenu}
              src="./static/icons/menu.svg"
              alt="menu"
            />
            <span>Меню</span>
          </menu>
        </div>
        <div className={s.column}>
          <div className={s.logo}>
            <Link to={"/"}>
              <img src="./static/icons/logo.svg" alt="logo" />
            </Link>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.controls}>
            <div onClick={props.onSearch} className={s.button}>
              <img src="./static/icons/Shape.svg" alt="search" />
            </div>
            <Link to={"/fovorite"}>
              <div className={s.button}>
                {fovorite.length > 0 && (
                  <div className={s.bage}>
                    <span>{fovorite.length}</span>
                  </div>
                )}
                <img src="./static/icons/fovoriteB.svg" alt="fovoriteB" />
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className={s.button}>
                {cart.length > 0 && (
                  <div className={s.bage}>
                    <span>{cart.length}</span>
                  </div>
                )}
                <img src="./static/icons/cart.svg" alt="cart" />
              </div>
            </Link>
          </div>
          <div className={s.phone}>
            <a href="tel:+1234567890">
              <img src="./static/icons/phone.svg" alt="phone" />
            </a>
          </div>
        </div>
      </div>
      <div className={s.bottom}></div>
    </div>
  );
};

export default Header;
