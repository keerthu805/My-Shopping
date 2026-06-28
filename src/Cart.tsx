import  { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    increase,
    decrease,
    clearCart
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );

  const buyNow = () => {
    alert(
      `Total Amount ₹${total}
Your Order is Confirmed and will be delivered soon.
Thanks For Shopping!`
    );

    clearCart();
  };
const route = useNavigate();

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Women')
            
            }}
  return (
    <>
    <div className="cart-container">
       <h1 className="carth1"><b><i>Shop and Pay</i></b></h1>
      <div className="cart-container1">
     
      <h1><b>Cart</b></h1>

      {cart.map((item: any) => (
        <div className="cart-item" key={item.id}>
          <img src={item.imageSrc} alt="" />
          <h2>{item.name}</h2>

          <h3>₹{item.price}</h3>

          <button onClick={() => decrease(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increase(item.id)}>
            +
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button className="buy-btn" onClick={buyNow} >
        Buy Now
      </button>
      <div>
      <button className="buy-btn" onClick={()=>navFun(1)}>Home</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart;