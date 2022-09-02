import React from "react";
import Info from "./../Info/Info";
import axios from "axios";
import { AppContext } from "../../App";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, items = [], onRemove }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63091d67f8a20183f76ecc98.mockapi.io/orders",
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63091d67f8a20183f76ecc98.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      console.log("Order not created");
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Кошик{" "}
          <img
            onClick={onClose}
            className="removeBtn  cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj, id) => (
                <div key={id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="">
                <li className="d-flex">
                  <span>Cума:</span>
                  <div></div>
                  <b>20 000 грн</b>
                </li>
                <li className="d-flex">
                  <span>Податок 7%:</span>
                  <div></div>
                  <b>1075 грн</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення оформлено" : "Корзина порожня"}
            description={
              isOrderComplete
                ? `Ваше замовлення №${orderId} буде відправлено найближчим часом`
                : "Додайте хоча б одну пару кросівок, щоб зробити замовлення"
            }
            img={
              isOrderComplete
                ? "/img/complete-order.svg"
                : "/img/empty-cart.svg"
            }
          />
        )}
      </div>
    </div>
  );
};
export default Drawer;
