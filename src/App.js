import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onAddToCart = (obj) => {
    axios
      .post("https://63091d67f8a20183f76ecc98.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63091d67f8a20183f76ecc98.mockapi.io/cart/${id}`);
    setCartItems(cartItems.filter((obj) => obj.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://63091d67f8a20183f76ecc98.mockapi.io/favorites", obj)
    .then((res) => setFavorites((prev) => [...prev, res.data]));
   
  };
  // const onRemoveFromFavorite = (id)=> {
  //   axios.delete(`https://63091d67f8a20183f76ecc98.mockapi.io/favorites/${id}`);
  //   setFavorites(cartItems.filter(obj => obj.id !== id))
  // }

  React.useEffect(() => {
    axios
      .get("https://63091d67f8a20183f76ecc98.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://63091d67f8a20183f76ecc98.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://63091d67f8a20183f76ecc98.mockapi.io/favorites")
      .then((res) => setFavorites(res.data));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onRemove={onRemoveFromCart}
          onClose={() => setCartOpened(false)}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/favorites" element={<Favorite items={favorites} />} />
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              items={items}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
