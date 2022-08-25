
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between" >Кошик <img className="removeBtn  cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
          
          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage:"url(/img/sneakers/1.jpg)"}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
              <b>1205 грн</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage:"url(/img/sneakers/1.jpg)"}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
              <b>1205 грн</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>

          
          </div>
          <div className="cartTotalBlock">
          <ul className="">
            <li className="d-flex">
              <span>
                Cума:
              </span>
              <div>
                
              </div>
              <b>20 000 грн</b>
            </li>
            <li className="d-flex">
            <span>
                Податок 7%:
              </span>
              <div>
                
              </div>
              <b>1075 грн</b>
            </li>
          </ul>
          <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow"/></button>
          </div>

        </div>
      </div>

      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img height={40} width={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
          <ul className="d-flex">
            <li className="mr-30"> 
              <img height={18} width={18} src="/img/cart.svg" alt="cart"/>
              <span> 1205 грн</span>
            </li>
            <li> 
              <img height={18} width={18} src="/img/user.svg" alt="user"/>
            </li>
          </ul>
      </header>
      <div>Slider</div>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Пошук..."/>
          </div>
        </div>
     
        <div className="d-flex">
        <div className="card">
          <div className="favorite">
           <img src="/img/heart-unliked.svg" alt="Unliked"/>
          </div>
          <img width ={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна: </span>
              <b>12 999  грн</b>
            </div>
            <button className="button">
              <img width ={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
          
        </div>
        <div className="card">
          <img width ={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна: </span>
              <b>12 999  грн</b>
            </div>
            <button className="button">
              <img width ={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
          
        </div>
        <div className="card">
          <img width ={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна: </span>
              <b>12 999  грн</b>
            </div>
            <button className="button">
              <img width ={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
          
        </div>
        <div className="card">
          <img width ={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна: </span>
              <b>12 999  грн</b>
            </div>
            <button className="button">
              <img width ={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
          
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
