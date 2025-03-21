import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../app/features/cartSlice";
import { useEffect, useState } from "react";

function Dessert({ d }) {
  const dispatch = useDispatch();
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    setAlreadyAdded(d.amount !== 0);
  }, [d.amount]);

  const addDessert = (d) => {
    dispatch(addToCart(d.id));
  };

  return (
    <div className="cart">
      <picture>
        <source media="(min-width:1025px )" srcSet={d.image.desktop} />
        <source media="(min-width:768px )" srcSet={d.image.tablet} />
        <source media="(min-width: 350px)" srcSet={d.image.mobile} />
        <img
          style={{ borderColor: alreadyAdded && " #c73b0f" }}
          className="card-image"
          src={d.image.thumbnail}
          alt={d.name}
        />

        <div className="buttons-wrapper">
          {!alreadyAdded && (
            <button
              onClick={() => {
                addDessert(d);
                setAlreadyAdded(true);
              }}
              className="add-to-card"
            >
              <span className="add-to-card-inner-wrapper">
                <img
                  src="./images/icon-add-to-cart.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Add To Cart</span>
              </span>
            </button>
          )}
          {alreadyAdded && (
            <div className="increment-decrement-btns">
              <button
                onClick={() => dispatch(decreaseQuantity(d.id))}
                className="amount-change-btn"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 2"
                  >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </span>
              </button>
              <span className="amount">{d.amount}</span>
              <button
                onClick={() => dispatch(increaseQuantity(d.id))}
                className="amount-change-btn"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#fff"
                      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
        <div className="cart-info-content">
          <p className="cart-info-caregory">{d.category}</p>
          <h3 className="cart-info-name">{d.name}</h3>
          <h3 className="cart-info-price">${d.price}</h3>
        </div>
      </picture>
    </div>
  );
}

export default Dessert;
