import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";


export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        await axios.delete(
          `https://63091d67f8a20183f76ecc98.mockapi.io/cart/${findItem.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        await axios
          .post("https://63091d67f8a20183f76ecc98.mockapi.io/cart", obj)
          .then((res) => setCartItems((prev) => [...prev, res.data]));
      }
    } catch (error) {
      console.error("error add to cart");
    }
  };

  const onRemoveFromCart = async (id) => {
    try {
      await axios.delete(
        `https://63091d67f8a20183f76ecc98.mockapi.io/cart/${id}`
      );
      setCartItems(cartItems.filter((obj) => Number(obj.id) !==  Number(id)));
    } catch (error) {
      console.error("error on remove from cart");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) =>  Number(favObj.id) ===  Number(obj.id))) {
        axios.delete(
          `https://63091d67f8a20183f76ecc98.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        await axios
        .post(
          "https://63091d67f8a20183f76ecc98.mockapi.io/favorites",
          obj
        )
        .then((res) => setFavorites((prev) => [...prev, res.data]));
      }
    } catch (error) {
      console.error("failed add to list");
    }
  };
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://63091d67f8a20183f76ecc98.mockapi.io/cart"),
            axios.get("https://63091d67f8a20183f76ecc98.mockapi.io/favorites"),
            axios.get("https://63091d67f8a20183f76ecc98.mockapi.io/items"),
          ]);
        setIsLoading(true);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.error("error data request");
      }
    }
    fetchData();
  }, []);

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onRemove={onRemoveFromCart}
          onClose={() => setCartOpened(false)}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="favorites" element={<Favorite />} />
          <Route path="orders" element={<Orders />} />
          <Route
            path=""
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
    </AppContext.Provider>
  );
}

export default App;
