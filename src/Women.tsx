import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Common.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import w1 from './assets/Images/w1.png'
import w2 from './assets/Images/w2.png'
import w3 from './assets/Images/w3.png'
import w4 from './assets/Images/w4.png'
import w5 from './assets/Images/w5.png'
import w6 from './assets/Images/w6.png'

const products = [
  { id: 1, name: "Blue Anarkali", price: 999, imageSrc: w1},
  { id: 2, name: "Kurti", price: 799, imageSrc: w2 },
  { id: 3, name: "Women Jeans", price: 1499, imageSrc: w3 },
  { id: 4, name: "Crop top", price: 499, imageSrc: w4 },
  { id: 5, name: "Fancy Saree", price: 1199, imageSrc: w5 },
  { id: 6, name: "Pattu Saree", price: 1799, imageSrc: w6 },
];


function Women() {
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
      <h1 className="conth2">Women Collection</h1>

      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.imageSrc} alt="" />
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

export default Women;