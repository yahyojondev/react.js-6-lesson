import React from 'react'
import { NavLink } from 'react-router-dom'
import {Routers} from "../../static/Router"
import { RiMenu2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/navbarlogo.svg"
import logoword from "../../assets/images/navbarwordimg.svg"
import Login from "../../pages/login/Login"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  let routersitem = Routers?.map(el=>(
                <li key={el.id} className="navbar__item"><a href={el.path} className="navbar__link">{el.title}</a></li>
  ))
  return (
  <div className="navbar">
        <div className="navbar__wrapper">
            <div className="navbar__top">
              <div className="container">
                   <div className="navbar__top__wrapper">
                   <RiMenu2Fill className='navbar__top__menu' />
               <ul className="navbar__list">
                {routersitem}
               </ul>
               <div className="navbar__phone">
                 <FaPhone />
                 <NavLink className="navbar__link">+123 ( 456 ) ( 7890 )</NavLink>
               </div>
              </div>
              </div>
            </div>
            <div className="navbar__bottom">
              <div className="container">
             <div  className="navbar__bottom__wrapper">
                    <div  className="images__wrapper"><img className='navbar__logo' src={logo} alt="" /><img className='navbar__wordlogo' src={logoword} alt="" /></div>
                    <div className="navbar__forms">
                       <input placeholder='Search For items...' type="text" className="navbar__search" />
                       <select  name="yahyojon" id="">
                        <option value="">All categories</option>
                       </select>
                       <div className="form__img">
                       <CiSearch className='navbar__bottom__img'/>
                       </div>
                    </div>
                    <ul className="navbar__bottom__list">
                      <li className="navbar__bottom__item"><NavLink to={"/login"}  href={<Login/>} className="navbar__bottom__link"><MdOutlinePerson2 />Account</NavLink></li>
                      <li className="navbar__bottom__item"><a href="#" className="navbar__bottom__link"><CiHeart />Wishlist</a></li>
                      <li className="navbar__bottom__item"><a href="#" className="navbar__bottom__link"><FiShoppingCart />Cart</a></li>
                    </ul>
                 </div>
              </div>
            </div>
        </div>
  </div>
  )
}

export default Navbar