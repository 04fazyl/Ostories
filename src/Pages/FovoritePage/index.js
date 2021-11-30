import React from "react";
import AppContext from "../../context";
import { Catalog } from "../../сomponents";
import s from './FovoritePage.module.scss'

const FovoritePage = (props) => {
  const { product, productPage, fovorite } = React.useContext(AppContext);
  const fv = product.filter((el) => fovorite.includes(el.id));

  console.log(fv);
  return (
    <div className={s.wrapper}>
      {fovorite.length === 0 ? (
        <div className={s.empty}>Список избранного пуст !!!</div>
      ) : (
        <Catalog
          page="fovorite"
          product={fv}
          clickFovorite={props.clickFovorite}
          clickProduct={props.clickProduct}
        />
      )}
    </div>
  );
};

export default FovoritePage;
