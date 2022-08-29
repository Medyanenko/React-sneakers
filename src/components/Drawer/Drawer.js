const Drawer = ({ onClose, items = [], onRemove }) => {
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
          <div>
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
              <button className="greenButton">
                Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.svg"
              alt="Empty cart"
            />
            <h2>Корзина порожня</h2>
            <p className="opacity-6">
              Додайте хоча б одну пару кросівок, щоб зробити замовлення
            </p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутися
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Drawer;
