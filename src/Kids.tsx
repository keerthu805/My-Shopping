import  { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Common.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

import k1 from './assets/Images/k1.png'
import k2 from './assets/Images/k2.png'
import k3 from './assets/Images/k3.png'
import k4 from './assets/Images/k4.png'
import k5 from './assets/Images/k5.png'
import k6 from './assets/Images/k6.png'

const products = [
  { id: 1, name: "Orange colour pattu pavadai", price: 999, imageSrc: k1},
  { id: 2, name: "Cotton Frock", price: 799, imageSrc: k2 },
  { id: 3, name: "Green colour pattu pavadai", price: 1499, imageSrc: k3 },
  { id: 4, name: "Boys Fancy Wear", price: 1899, imageSrc: k4 },
  { id: 5, name: "Boys Causal Coat", price: 2199, imageSrc: k5 },
  { id: 6, name: "Kids Dhoti", price: 1499, imageSrc: k6 },
];

export default function Kids() {
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
    <>
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
      <h1 className="conth2">Kids Collection</h1>



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
    </>
  )
}

