import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router";
import s from "./App.module.scss";
import AppContext from "./context";
import {
  CartPage,
  FovoritePage,
  MainPage,
  ProductPage,
  SearchPage,
} from "./Pages";
import { Drawer, Header, Search, Widget, Catalog } from "./сomponents";

function App() {
  const [menu, setMenu] = React.useState(false);
  const showMenu = () => {
    setMenu((menu) => !menu);
  };

  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const [search, setSearch] = React.useState(false);
  const onSearch = () => {
    setSearch((search) => !search);
    setSearchValue("");
  };

  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [productResponse] = await Promise.all([
          axios.get("https://619969eb9022ea0017a7ae60.mockapi.io/products"),
        ]);

        setProduct(productResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [productPage, setProductPage] = React.useState({});
  const clickProduct = (obj) => {
    setProductPage(obj);
    setSearch(false)
  };

  const [fovorite, setFovorite] = React.useState([]);
  const clickFovorite = (value) => {
    !fovorite.includes(value)
      ? setFovorite([...fovorite, value])
      : setFovorite([...fovorite].filter((el) => el !== value));
  };

  const [cart, setCart] = React.useState([]);
  const clickCart = (obj) => {
    cart.some((el) => el.id === obj.id && el.size === obj.size)
      ? setCart(
          [...cart].filter((el) =>
            el.id === obj.id && el.size === obj.size
              ? (el.count += obj.count)
              : true
          )
        )
      : setCart([...cart, obj]);
    alert("Товар добавлен в корзину");
    console.log(cart);
  };
  const deleteOfCart = (obj) => {
    setCart([...cart].filter((el) => el.id !== obj.id || el.size !== obj.size));
    alert("Товар удален из корзины");
  };

  const incrementCount = (obj) => {
    console.log(cart);
    obj.flag
      ? setCart(
          [...cart].map((el) =>
            el.id === obj.id && el.size === obj.size
              ? {
                  count: el.count + 1,
                  id: el.id,
                  image: el.image,
                  price: el.price,
                  size: el.size,
                  title: el.title,
                }
              : el
          )
        )
      : setCart(
          [...cart].map((el) =>
            el.id === obj.id && el.size === obj.size
              ? {
                  count: el.count > 1 ? el.count - 1 : el.count,
                  id: el.id,
                  image: el.image,
                  price: el.price,
                  size: el.size,
                  title: el.title,
                }
              : el
          )
        );
  };

  return (
    <AppContext.Provider
      value={{ product, productPage, fovorite, cart, searchValue }}
    >
      <div className={s.container}>
        <Search
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
          onSearch={onSearch}
          top={search ? "0" : "-100%"}
        />
        <Header showMenu={showMenu} onSearch={onSearch} />
        <Drawer showMenu={showMenu} left={menu ? "0" : "-100%"} />
        {search ? (
          <div className={s.main}>
            <SearchPage
              clickProduct={clickProduct}
              clickFovorite={clickFovorite}
            />
          </div>
        ) : (
          <div className={s.main}>
            {" "}
            <Routes>
              <Route
                path={"/"}
                element={
                  <MainPage
                    clickProduct={clickProduct}
                    clickFovorite={clickFovorite}
                  />
                }
              />
            </Routes>
            <Routes>
              <Route
                path={"/cart"}
                element={
                  <CartPage
                    clickFovorite={clickFovorite}
                    deleteOfCart={deleteOfCart}
                    incrementCount={incrementCount}
                  />
                }
              />
            </Routes>
            <Routes>
              <Route
                path={"/product"}
                element={
                  <ProductPage
                    clickProduct={clickProduct}
                    clickFovorite={clickFovorite}
                    clickCart={clickCart}
                  />
                }
              />
            </Routes>
            <Routes>
              <Route
                path={"/fovorite"}
                element={
                  <FovoritePage
                    clickProduct={clickProduct}
                    clickFovorite={clickFovorite}
                  />
                }
              />
            </Routes>
          </div>
        )}

        <Widget onSearch={onSearch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
