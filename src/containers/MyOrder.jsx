import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import flechita from "@icons/flechita.svg";
import "@styles/MyOrder.scss";
import OrderItem from "@components/OrderItem";

const MyOrder = ({toggleOrders,setToggleOrders}) => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={flechita} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <div className="cart-product-list">
          {state.cart.map((product,index) => (
            <OrderItem product={product} key={`order-item-${product.id}-${index}`} />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
