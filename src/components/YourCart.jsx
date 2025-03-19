import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";

function YourCart() {
  const { totalAmount, totalPrice, desserts } = useSelector(
    (store) => store.cart
  );
  return (
    <div className="your-card">
      <h2 className="your-card-title">Your Cart ({totalAmount})</h2>
      {desserts.map((d) => {
        return d.amount !== 0 && <Cartitem key={d.id} d={d} />;
      })}

      {totalAmount == 0 && (
        <div className="your-card-empty">
          <img src="./images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      )}
      {totalAmount !== 0 && (
        <div>
          <div className="order-total">
            <p>Order Total</p>
            <h2>${totalPrice}</h2>
          </div>
          <div className="delivery">
            <img src="./images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>carbon-netural</strong> delivery{" "}
            </p>
          </div>
          <button className="order-btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
}

export default YourCart;
