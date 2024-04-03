import React from 'react'
import logo from "../../assets/images/loginlogo.png"
import  {NavLink} from "react-router-dom"

function Login() {
  return (
  <div className="wrapper__login">
    <div className="login">
         <div className="login__wrapper">
         <div className="title__img">
           <img src={logo} alt="" className="login__logo" />
           <h3 className="login__img__title">Food Trove</h3>
         </div>
         <div className="login__form">
            <h5 className="input__title">Email Addres</h5>
            <input type="text" placeholder='Enter your email' />
            <h5 className="input__title">Password</h5>
            <input type="text" placeholder='Enter your password' />
            <ul className="login__list">
              <li className="login__item"> <span className="login__span"></span><a href="#" className="login__link">Remember Me</a></li>
              <li className="login__item"><a href="#" className="login__link">Forgot Password</a></li>
            </ul>
            <div className="login__btns">
              <NavLink to={"/admin"} href="" className="login__btn">Login</NavLink>
              <NavLink to={"/admin"} href="" className="login__btn__link">Signup ?</NavLink>
            </div>
         </div>
    </div>
  </div>
  </div>
  )
}

export default Login