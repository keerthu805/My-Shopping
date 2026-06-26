import  { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

 export default function Signup() {
    const navigate = useNavigate()

    const SigninNav = (type: any) => {
        if (type == 1) {
            navigate('/Signin')
        }}
  
  const [formData, setFormData] = useState({
    Emailid:"",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup Successful!");
    console.log(formData);
  }
  

  return (
    <>
     <h1 className="signh1">Shop and Pay</h1>
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
     <h3>Enter your Email id:</h3>
        <input
          type="text"
          name="Emailid"
          placeholder="Email id"
          onChange={handleChange}
          required
        />
     <h3>Enter your FirstName:</h3>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
     <h3>Enter your LastName:</h3>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
     <h3>Enter your Password:</h3>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
 <h3>Confirm your Password:</h3>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <h3>Date of Birth:</h3>
        <input
          type="date"
          name="dob"
          onChange={handleChange}
          required
        />

        <div className="gender">
          <h3>Gender:</h3>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <button type="submit" onClick={()=>SigninNav(1) }>Submit</button>
      </form>
    </div>
    </>
  );
}

