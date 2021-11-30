import React from "react";
import { Card } from "..";
import s from "./Catalog.module.scss";

const Catalog = (props) => {
  return (
    <div
      style={{ justifyContent: props.page === "fovorite" && "start" }}
      className={s.wrapper}
    >
      {props.product.map((el, index) => (
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
  );
};

export default Catalog;
