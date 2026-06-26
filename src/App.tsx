import { Routes, Route} from "react-router-dom";
import SignIn from "./Signin";
import SignUp from "./Signup";
import Women from "./Women";
import Men from "./Men";
import Kids from "./Kids";
import Accessories from "./Accessories";
import Cart from "./Cart";

import { CartProvider } from "./CartContext";
import "./App.css";
import Signin from "./Signin";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
         <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;