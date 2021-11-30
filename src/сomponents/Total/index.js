import s from "./Total.module.scss";

const Total = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.goods}>
        <span>Товары ({props.goods})</span>
        <span>{props.total} ₽</span>
      </div>
      <div className={s.total}>
        <span>Итого:</span>
        <span>{props.total} ₽</span>
      </div>
      <div className={s.button}>
        <span>Оформить заказ</span>
      </div>
    </div>
  );
};

export default Total;
