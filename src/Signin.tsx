import { useNavigate } from "react-router-dom";
import "./Signin.css";


export default function Signin() {
     const navigate = useNavigate()

    const SigninNav = (type: any) => {
        if (type == 1) {
            navigate('/Women')
        }}
  

  return (
    <>
    <h1 className="signh1">Shop and Pay</h1>
    <div className="signin-container">
       
      <form className="signin-form" >
        <h1>Welcome!!</h1>
      
        <input type="email"
          name="email"
          placeholder="Email ID"
          /> 

        <input
          type="password"
          name="password"
          placeholder="Password"
          
        />
        

        <button type="button" onClick={()=>SigninNav(1)}>Login</button>
       

        <p className="signup-text">
          New User? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
    </>
  )
}

