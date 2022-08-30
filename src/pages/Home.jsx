import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>
          {searchValue ? `Пошук за запитом: "${searchValue}"` : "Всі кросівки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Пошук..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, id) => (
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
  );
};
export default Home;
