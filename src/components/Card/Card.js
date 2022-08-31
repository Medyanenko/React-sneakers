import React from "react";
import s from "./Card.module.scss";

const Card = ({id, imgUrl, alt, title, price, onFavorite, onPlus, favorited=false, added=false}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const onClickPlus = () => {
    onPlus({id, imgUrl, alt, title, price});
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({id, imgUrl, alt, title, price});
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.card}>
      <div className={s.favorite} onClick={onFavorite}>
        <img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.png"} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imgUrl} alt={alt} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Ціна: </span>
          <b>{price} грн</b>
        </div>
        <img
          className={s.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
};
export default Card;
