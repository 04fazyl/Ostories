import { Card } from "..";
import s from "./OtherGoods.module.scss";

const OtherGoods = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <span>Другие товары</span>
      </div>
      <div className={s.scroll}>
        <div className={s.track}>
          {props.other.map((el, index) => (
            <Card
              key={index}
              id={el.id}
              title={el.title}
              image={el.image}
              gender={el.sex}
              price={el.price}
              page={props.page}
              clickProduct={props.clickProduct}
              clickFovorite={props.clickFovorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherGoods;
