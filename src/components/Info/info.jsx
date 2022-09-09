import React from 'react'
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Info = ({img, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext)
  return (
      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src={img}
              alt="ordered"
            />
            <h2>{title}</h2>
            <p className="opacity-6">
              { description}
            </p>
            <Link to="/">
            <button className="greenButton" onClick={()=>setCartOpened(false)}>
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутися
            </button>
            </Link>
          </div>
  )
}

export default Info
