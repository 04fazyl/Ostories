import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import s from "./Drawer.module.scss";

const Drawer = (props) => {
  const { fovorite } = React.useContext(AppContext);
  return (
    <div style={{ left: `${props.left}` }} className={s.overlay}>
      <div className={s.panel}>
        <div className={s.content}>
          <div className={s.title}>
            <span>Меню</span>
          </div>
          <div className={s.section}>
            <h3>Меню</h3>
            <ul>
              <li>О компании</li>
              <li>Контакты</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Личный кабинет</li>
            </ul>
          </div>
          <div className={s.contact}>
            <h3>Контакты</h3>
            <a href="tel:+1234567890">+7(800) 800-80-80</a>
            <p>г. Москва, ул. Новорязанская, 18, стр. 11</p>
          </div>
          <div className={s.soclinks}>
            <div className={s.soclinksItems}>
              <img src="./static/icons/instagram.svg" alt="instagrem" />
            </div>
            <div className={s.soclinksItems}>
              <img src="./static/icons/twitter.svg" alt="twitter" />
            </div>
            <div className={s.soclinksItems}>
              <img src="./static/icons/whatsApp.svg" alt="whatsApp" />
            </div>
            <div className={s.soclinksItems}>
              <img src="./static/icons/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={props.showMenu}>
        <img src="./static/icons/close.svg" alt="close" />
      </button>
    </div>
  );
};

export default Drawer;
