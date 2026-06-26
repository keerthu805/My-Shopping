import  { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useNavigate } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import m1 from './assets/Images/m1.png'
import m2 from './assets/Images/m2.png'
import m3 from './assets/Images/m3.png'
import m4 from './assets/Images/m4.png'
import m5 from './assets/Images/m5.png'
import m6 from './assets/Images/m6.png'

const products = [
  { id: 1, name: "Track Pant", price: 999, imageSrc: m1},
  { id: 2, name: "Dhoti", price: 799, imageSrc: m2 },
  { id: 3, name: "Wedding Suit", price: 2499, imageSrc: m3 },
  { id: 4, name: "Combo T-Shirt", price: 899, imageSrc: m4},
  { id: 5, name: "Black T-Shirt", price: 299, imageSrc: m5 },
  { id: 6, name: "Blue Shirt", price: 999, imageSrc: m6 },
];

export default function Men() {
  const {
    increase,
    decrease,
  } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const route = useNavigate();

  const navFun = (type: any) => {
    if (type == 1) {
      route('/Women')
    }
    else if (type == 2) {
            route('/Men')
        }
        else if (type == 3) {
            route('/Kids')
        }
        else if (type == 4) {
            route('/Accessories')
        }
        else if (type == 5) {
            route('/Cart')
        }
        else if (type == 6) {
            route('/Signin')
        }
  }

  return (
    <div className="container">
      <div>
        <h1 className="conth1">Shop and Pay</h1>
       <button className="buttonTop" onClick={() => navFun(1)}>Women collection</button>
        <button className="buttonTop" onClick={() => navFun(2)}>Men collection</button>
        <button className="buttonTop" onClick={() => navFun(3)}>Kids collection</button>
        <button className="buttonTop" onClick={() => navFun(4)}>Accessories</button>
        <button className="buttonTop" onClick={() => navFun(5)}>Cart<FontAwesomeIcon icon={faCartShopping} /></button>
        <button className="buttonTop" onClick={() => navFun(6)}>Logout<FontAwesomeIcon icon={faRightFromBracket} /></button>
      </div>
      <hr />
      <h1 className="conth2">Men Collection</h1>


      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.imageSrc} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>₹{item.price}</h3>

           <div className="GridAdd">
            <button onClick={() => decrease(item.id)}>
            -
          </button>
            <button  className='CartAdd'onClick={() => addToCart(item)}>
              Add To Cart 
            </button>
            <button onClick={() => increase(item.id)}>
            +
          </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

