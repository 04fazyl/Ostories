import React from "react";
import AppContext from "../../context";
import s from "./Cart.module.scss";

const Cart = (props) => {
  const { fovorite } = React.useContext(AppContext);

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={`./static/items${props.image}`} />
      </div>
      <div className={s.mainBlock}>
        <div className={s.titleBlock}>
          <div className={s.title}>{props.title}</div>
          <div className={s.size}>({props.size}) </div>
          <div className={s.price}>{props.price} ₽/шт</div>
        </div>
        <div className={s.countBlock}>
          <button
            onClick={() => {
              props.incrementCount({
                id: props.id,
                size: props.size,
                flag: false,
              });
            }}
          >
            -
          </button>
          <div className={s.value}>
            <span>{props.count}</span>
          </div>
          <button
            onClick={() => {
              props.incrementCount({
                id: props.id,
                size: props.size,
                flag: true,
              });
            }}
          >
            +
          </button>
        </div>
        <div className={s.totalBlock}>
          <span>{props.price * props.count} ₽</span>
        </div>
      </div>

      <div className={s.buttonsBlock}>
        <div
          onClick={() => {
            props.clickFovorite(props.id);
          }}
          className={s.button}
        >
          <svg
            width="20"
            height="22"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6736 3.65973C9.46063 1.44676 5.8727 1.44676 3.65973 3.65973C1.44676 5.8727 1.44676 9.46063 3.65973 11.6736L11.1786 19.1925C11.8425 19.8564 12.9189 19.8564 13.5828 19.1925L21.1017 11.6736C23.3147 9.46063 23.3147 5.8727 21.1017 3.65973C18.8887 1.44676 15.3008 1.44676 13.0878 3.65973L12.3807 4.36684L11.6736 3.65973ZM12.3807 1.61955C9.37262 -0.731496 5.01387 -0.52284 2.24551 2.24551C-0.748505 5.23953 -0.748505 10.0938 2.24551 13.0878L9.76442 20.6067C11.2094 22.0517 13.5521 22.0517 14.997 20.6067L22.5159 13.0878C25.5099 10.0938 25.5099 5.23953 22.5159 2.24551C19.7476 -0.52284 15.3888 -0.731496 12.3807 1.61955Z"
              fill={fovorite.includes(props.id) ? "#FF6163" : "#999999FF"}
            />
          </svg>
        </div>
        <div
          onClick={() => {
            props.deleteOfCart({ id: props.id, size: props.size });
          }}
          className={s.button}
        >
          <svg
            width="16"
            height="20"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 21C3 21.5523 3.44772 22 4 22H16C16.5523 22 17 21.5523 17 21V9H3V21ZM15 3H17C18.6569 3 20 4.34315 20 6V8C20 8.55228 19.5523 9 19 9V21C19 22.6569 17.6569 24 16 24H4C2.34315 24 1 22.6569 1 21V9C0.447715 9 0 8.55228 0 8V6C0 4.34315 1.34315 3 3 3H5C5 1.34315 6.34315 0 8 0H12C13.6569 0 15 1.34315 15 3ZM5 13C5 12.4477 5.44772 12 6 12C6.55228 12 7 12.4477 7 13V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V13ZM9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V13ZM13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V13ZM8 2C7.44772 2 7 2.44772 7 3H13C13 2.44772 12.5523 2 12 2H8ZM2 7H18V6C18 5.44772 17.5523 5 17 5H3C2.44772 5 2 5.44772 2 6V7Z"
              fill="#999999FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cart;
