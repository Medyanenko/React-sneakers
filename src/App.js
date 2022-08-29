import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");


  const onAddToCart = (obj) => {
    axios.post("https://63091d67f8a20183f76ecc98.mockapi.io/cart", obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id)=> {
    axios.delete(`https://63091d67f8a20183f76ecc98.mockapi.io/cart/${id}`);
    setCartItems(cartItems.filter(obj => obj.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToFavorite = (obj) => {
    axios.post("https://63091d67f8a20183f76ecc98.mockapi.io/favorites", obj)
    setFavorites((prev) => [...prev, obj]);
  };
  // const onRemoveFromFavorite = (id)=> {
  //   axios.delete(`https://63091d67f8a20183f76ecc98.mockapi.io/favorites/${id}`);
  //   setFavorites(cartItems.filter(obj => obj.id !== id))
  // }

  React.useEffect(() => {
    axios.get("https://63091d67f8a20183f76ecc98.mockapi.io/items").then((res) =>
      setItems(res.data)
    );
    axios.get("https://63091d67f8a20183f76ecc98.mockapi.io/cart").then((res) =>
    setCartItems(res.data)
  )
  }, []);


  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onRemove = {onRemoveFromCart} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div>Slider</div>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>{searchValue ? `Пошук за запитом: "${searchValue}"` : "Всі кросівки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value= {searchValue} placeholder="Пошук..." />
            {searchValue && <img onClick={() => setSearchValue("")} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
          items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, id) => (
            <Card
              key={id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              alt={item.alt}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
