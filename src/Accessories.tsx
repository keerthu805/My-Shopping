import  { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Common.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

import a1 from './assets/Images/a1.png'
import a2 from './assets/Images/a2.png'
import a3 from './assets/Images/a3.png'
import a4 from './assets/Images/a4.png'
import a5 from './assets/Images/a5.png'
import a6 from './assets/Images/a6.png'


const products = [
  { id: 1, name: "Infinity Chain", price: 399, imageSrc: a1},
  { id: 2, name: "Bracelet", price: 99, imageSrc: a2 },
  { id: 3, name: "Black Cap", price: 399, imageSrc: a3 },
  { id: 4, name: "Men Weather Belt", price: 699, imageSrc: a4 },
  { id: 5, name: "Earrings Combo", price: 299, imageSrc: a5 },
  { id: 6, name: "Men Watch", price: 4799, imageSrc: a6 },
];

export default function Accessories() {
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
      <h1 className="conth2">Accessories</h1>



      <div className="grid">
        {products.map((item:any ) => (
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

