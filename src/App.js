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
  const [isLoading, setIsLoading] = React.useState(true);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63091d67f8a20183f76ecc98.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios
        .post("https://63091d67f8a20183f76ecc98.mockapi.io/cart", obj)
        .then((res) => setCartItems((prev) => [...prev, res.data]));
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63091d67f8a20183f76ecc98.mockapi.io/cart/${id}`);
    setCartItems(cartItems.filter((obj) => obj.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63091d67f8a20183f76ecc98.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://63091d67f8a20183f76ecc98.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log("failed to add to list");
    }
  };
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://63091d67f8a20183f76ecc98.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://63091d67f8a20183f76ecc98.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://63091d67f8a20183f76ecc98.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data);

    }
    fetchData();
    
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
        <Route
          path="/favorites"
          element={
            <Favorite items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
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
              cartItems={cartItems}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
