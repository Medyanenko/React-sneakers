import React from "react";
import Card from "../components/Card/Card";
const Favorite = ({ items, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Список бажань</h1>
      </div>

      <div className="d-flex flex-wrap">
        
        {items.map((item, id) => (
          <Card
            key={id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            alt={item.alt}
            id={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorite;
