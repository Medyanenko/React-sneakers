const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">
        Кошик{" "}
        <img
          className="removeBtn  cu-p"
          src="/img/btn-remove.svg"
          alt="Remove"
        />
      </h2>

      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
            <b>1205 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
            <b>1205 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
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
    </div>
  );
};
export default Drawer;
