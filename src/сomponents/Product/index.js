import React from "react";
import AppContext from "../../context";
import s from "./Product.module.scss";

const Product = (props) => {
  const rating = [1, 2, 3, 4, 5];
  const { fovorite } = React.useContext(AppContext);

  const [cartCount, setCartCount] = React.useState(1);

  const clickCartCounters = (val) => {
    val ? setCartCount(cartCount + 1) : setCartCount(cartCount - 1);
  };

  const [addCart, setAddCart] = React.useState(false);
  const clickAddCart = () => {
    setAddCart((addCart) => !addCart);
  };

  const sizeArr = ["S", "M", "L", "XL"];
  const [size, setSize] = React.useState("");

  const sizeClick = (el) => {
    setSize(el);
    setCartCount(1);
  };

  const clickCartCount = () => {
    props.clickCart({
      id: props.id,
      count: cartCount,
      title: props.title,
      price: props.price,
      image: props.image,
      size: size,
    });
    setAddCart(false);
    setCartCount(1);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={`./static/items${props.image}`} alt="product" />
      </div>
      <div className={s.area}>
        <div className={s.text}>
          <div className={s.rating}>
            <div className={s.ratingStars}>
              {rating.map((el, index) => (
                <div key={index} className={s.star}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.51883 22.3171C5.50805 22.7625 4.32757 22.3042 3.88215 21.2934C3.74267 20.9769 3.68766 20.6296 3.7225 20.2854L4.29494 14.6317L0.508636 10.3941C-0.227329 9.57048 -0.156231 8.30614 0.667437 7.57018C0.925373 7.33971 1.23867 7.18008 1.57674 7.10687L7.13067 5.90418L9.99075 0.993728C10.5467 0.0392559 11.7711 -0.283827 12.7256 0.272103C13.0245 0.446195 13.2731 0.694831 13.4472 0.993728L16.3073 5.90418L21.8612 7.10687C22.9408 7.34064 23.6264 8.4053 23.3926 9.48485C23.3194 9.82291 23.1598 10.1362 22.9293 10.3941L19.143 14.6317L19.7155 20.2854C19.8267 21.3844 19.026 22.3654 17.9271 22.4767C17.583 22.5116 17.2357 22.4565 16.9191 22.3171L11.719 20.0255L6.51883 22.3171Z"
                      fill="#1B2738"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className={s.ratingCount}>
              <span>({props.rating})</span>
            </div>
          </div>
          <div className={s.title}>
            <span>{props.title}</span>
          </div>
          <div className={s.price}>
            <span>{props.price} ₽</span>
          </div>
          <div className={s.size}>
            <p>Размер</p>
            <div className={s.sizeValues}>
              {sizeArr.map((el) => (
                <div
                  onClick={() => {
                    sizeClick(el);
                  }}
                  style={{
                    backgroundColor: el === size ? "#fff" : "#f7f7f7",
                    border: el === size ? "1px solid #ff6163" : "#f7f7f7",
                  }}
                  className={s.sizeButton}
                >
                  <span>{el}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={s.buttons}>
            {addCart ? (
              <div className={s.ButtonAddCart}>
                <div
                  onClick={
                    cartCount < 2
                      ? clickAddCart
                      : () => {
                          clickCartCounters(false);
                        }
                  }
                  className={s.cartCounters}
                >
                  {" "}
                  <span> - </span>{" "}
                </div>
                <div onClick={size ? clickCartCount : () => {alert('Выберите размер!!!')}} className={s.cartCount}>
                  {" "}
                  <p> В корзине {cartCount} шт </p> <p> Перейти </p>{" "}
                </div>
                <div
                  onClick={() => {
                    clickCartCounters(true);
                  }}
                  className={s.cartCounters}
                >
                  {" "}
                  <span> + </span>{" "}
                </div>
              </div>
            ) : (
              <div onClick={clickAddCart} className={s.ButtonCart}>
                <span>В корзину</span>
              </div>
            )}
            <div
              onClick={() => {
                props.clickFovorite(props.id);
              }}
              className={s.ButtonFovorite}
            >
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6736 3.65973C9.46063 1.44676 5.8727 1.44676 3.65973 3.65973C1.44676 5.8727 1.44676 9.46063 3.65973 11.6736L11.1786 19.1925C11.8425 19.8564 12.9189 19.8564 13.5828 19.1925L21.1017 11.6736C23.3147 9.46063 23.3147 5.8727 21.1017 3.65973C18.8887 1.44676 15.3008 1.44676 13.0878 3.65973L12.3807 4.36684L11.6736 3.65973ZM12.3807 1.61955C9.37262 -0.731496 5.01387 -0.52284 2.24551 2.24551C-0.748505 5.23953 -0.748505 10.0938 2.24551 13.0878L9.76442 20.6067C11.2094 22.0517 13.5521 22.0517 14.997 20.6067L22.5159 13.0878C25.5099 10.0938 25.5099 5.23953 22.5159 2.24551C19.7476 -0.52284 15.3888 -0.731496 12.3807 1.61955Z"
                  fill={fovorite.includes(props.id) ? "#ff6163" : "#999999FF"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
