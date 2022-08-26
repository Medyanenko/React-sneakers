import React from "react";
import s from "./Card.module.scss";

const Card = ({imgUrl, alt, title, price, onClickFavorite, onPlus}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({imgUrl, alt, title});
    setIsAdded(!isAdded);
  };


  return (
    <div className={s.card}>
      <div className={s.favorite} onClick={onClickFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
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
