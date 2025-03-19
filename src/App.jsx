import { useSelector } from "react-redux";
import { YourCart, DessertList } from "./components";

function App() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  console.log(desserts, totalAmount, totalPrice);

  return (
    <main>
      <section className="container grid-container">
        <DessertList desserts={desserts} />
        <YourCart />
      </section>
    </main>
  );
}

export default App;
