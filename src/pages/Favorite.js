import React from "react";
import Card from "../components/Card/Card";
import { AppContext } from "../App";

const Favorite = () => {
  const {favorites, onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Список бажань</h1>
      </div>

      <div className="d-flex flex-wrap">
        
        {favorites.map((item, id) => (
          <Card
            key={id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            alt={item.alt}
            id={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorite;
