import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"/"} exact>
      <div className="d-flex align-center">
        <img height={40} width={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img height={18} width={18} src="/img/cart.svg" alt="cart" />
          <span> 1205 грн</span>
        </li>
        <li>
          <Link to={"/favorites"} exact>
            <img
              className="mr-20 cu-p"
              height={18}
              width={18}
              src="/img/heart.svg"
              alt="favorite"
            />
          </Link>
        </li>
        <li>
          <img height={18} width={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};
export default Header;
