import React from "react";
import AppContext from "../../context";
import { Card } from "../../сomponents";
import s from "./SearchPage.module.scss";

const SearchPage = (props) => {
  const { product, searchValue } = React.useContext(AppContext);

  let srch = product.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      {srch.length < product.length
        ? srch.length > 0 ? srch.map((el, index) => (
            <Card
              key={index}
              id={el.id}
              title={el.title}
              image={el.image}
              gender={el.sex}
              price={el.price}
              clickProduct={props.clickProduct}
              clickFovorite={props.clickFovorite}
            />
          )) : <div className={s.empty}><span>Ничего не найдено...</span></div>
        : <div className={s.empty}><span>Страница поиска</span></div>}
    </div>
  );
};

export default SearchPage;
