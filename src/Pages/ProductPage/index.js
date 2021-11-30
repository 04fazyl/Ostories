import React from "react";
import { OtherGoods, Product } from "../../сomponents";
import AppContext from "../../context";

const ProductPage = (props) => {
  const { product, productPage } = React.useContext(AppContext);
  const arr = product.filter((el) => el.id === productPage.id);
  const other = product
    .filter((el) => el.id !== productPage.id)
    .filter((el) => el.sex === productPage.gender);
  return (
    <div>
      <Product
        key={arr[0].id}
        id={arr[0].id}
        title={arr[0].title}
        image={arr[0].image}
        price={arr[0].price}
        rating={arr[0].rating}
        clickFovorite={props.clickFovorite}
        clickCart={props.clickCart}
      />
      <OtherGoods
        other={other}
        clickProduct={props.clickProduct}
        clickFovorite={props.clickFovorite}
      />
    </div>
  );
};

export default ProductPage;
