import React from "react";
import AppContext from "../../context";
import { Cart, Total } from "../../сomponents";
import s from "./CartPage.module.scss";

const CartPage = (props) => {
  const { cart } = React.useContext(AppContext);
  const total = cart.map((el) => el.price * el.count).reduce((a, b) => a + b, 0);
  const goods = cart.map((el) => el.count).reduce((a, b) => a + b, 0);


  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <span>Корзина</span>
      </div>
      <div className={s.main}>
        <div className={s.cartWrapper}>
          {cart.length < 1 && <span>Ваша корзина пуста!!!</span> }
          {cart.map((el, index) => (
            <Cart
              key={index}
              clickFovorite={props.clickFovorite}
              deleteOfCart={props.deleteOfCart}
              incrementCount={props.incrementCount}
              id={el.id}
              image={el.image}
              title={el.title}
              size={el.size}
              price={el.price}
              count={el.count}
            />
          ))}
        </div>
        <div className={s.totalWrapper}>
          <Total goods={goods} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
