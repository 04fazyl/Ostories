import React from "react";
import AppContext from "../../context";
import { Catalog, Preview, Switch } from "../../сomponents";
import s from "./MainPage.module.scss";

const MainPage = (props) => {
  const [gender, setGender] = React.useState(true);
  const { product } = React.useContext(AppContext);
  const male = product.filter((el) => el.sex === "male");
  const famale = product.filter((el) => el.sex === "famale");

  return (
    <div className={s.wrapper}>
      <Preview />
      <Switch setGender={setGender} gender={gender} />
      <Catalog
        product={gender ? male : famale}
        page={"Main"}
        clickProduct={props.clickProduct}
        clickFovorite={props.clickFovorite}
      />
    </div>
  );
};

export default MainPage;
