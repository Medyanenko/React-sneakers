import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");


  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    // if (cartItems.length === 0) {
    //   setCartItems((prev) => [...prev, obj]);
    // } else {
    //   cartItems.map((img) => {
    //     if (img.imgUrl !== obj.imgUrl) {
    //       setCartItems((prev) => [...prev, obj]);
    //     }
    //   });
    // }
  };

  const onRemoveFromCart = (id)=> {
    setCartItems(cartItems.filter(obj => obj.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  React.useEffect(() => {
    fetch("https://63091d67f8a20183f76ecc98.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
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
              onClickFavorite={() => console.log(item)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
