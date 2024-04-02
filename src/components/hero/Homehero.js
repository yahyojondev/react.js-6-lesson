import React from 'react'
import   { HomeHeroproductRouters }  from '../../static/Router'
import { NavLink } from 'react-router-dom'
import rasm from "../../assets/images/banner-13.png.png"

function Homehero() {
    let homeHeroItem = HomeHeroproductRouters?.map(el=>(
    <div key={el.id} className="hero" style={{background:`${el.bg}`,backgroundSize:"cover"}}>
            <div className="container">
                 <div  className="homeHero__wrapper">
                    <div className="home__left">
                        <h4 className="homerHero__title__little"><span>100%{el.titlelittle}</span></h4>
                        <h1 className="homeHero__title">{el.title}</h1>
                        <p className="homeHero__text">{el.text}</p>
                        <home className="form">
                            <input type="text" placeholder='Your email addres' className="home__input" />
                            <button className="home__btn">Subscribe</button>
                        </home>
                    </div>
                    <ul className="homeHero__list">
                        <li className="homeHero__item"><NavLink  className="homeHero__link" hef="#"><span>x</span>{el.text2}</NavLink></li>
                        <li className="homeHero__item"><NavLink  className="homeHero__link" hef="#"><span>x</span>{el.text3}</NavLink></li>      
                        <li className="homeHero__item"><NavLink  className="homeHero__link" hef="#"><span>x</span>{el.text1}</NavLink></li>
                        <li className="homeHero__item"><NavLink  className="homeHero__link" hef="#"><span>x</span>{el.text4}</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    ))
  return (
    <div className='homeHero'>
       {homeHeroItem}
       <img src={rasm} alt="" className="body__absolute" />
    </div>
  )
}

export default Homehero