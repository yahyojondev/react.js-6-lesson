import React from 'react'
import logo from "../../assets/images/loginlogo.png"

function Login() {
  return (
    <div className="login__wrapper">
         <img src={logo} alt="" className="login__logo" />
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
              <a href="" className="login__btn">Login</a>
              <a href="" className="login__btn__link">Signup ?</a>
            </div>
         </div>
    </div>
  )
}

export default Login