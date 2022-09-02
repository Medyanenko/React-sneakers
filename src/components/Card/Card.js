import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";
import s from "./Card.module.scss";

const Card = ({
  id,
  imgUrl,
  alt,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imgUrl, alt, title, price });
  };
  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, alt, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {loading ? (
        <ContentLoader
          className={s.card}
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f2f2f2"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="112" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div className={s.card}>
          <div className={s.favorite} onClick={onFavorite}>
            <img
              onClick={onClickFavorite}
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.png"
              }
              alt="Unliked"
            />
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
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/plus.svg"}
              alt="plus"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
