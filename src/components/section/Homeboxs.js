import React from 'react'
import { NavLink } from 'react-router-dom'
import { homeboxproduct } from '../../static/Router'

function Homeboxs() {
    let homeboxitem = homeboxproduct?.map(el=>(
       <div key={el.id} className="home__box" style={{backgroundImage:`url(${el.bg})`,backgroundSize:"center",backgroundRepeat:"no-repeat",}}>
                    <h3 className="box__title">{el.title}</h3>
                    <NavLink className="box__link" href="#">{el.btntext}</NavLink>
                </div>
    ))
  return (
    <div className="boxs">
        <div className="container">
            <div className="home__boxs">
                {homeboxitem}
            </div>
        </div>
    </div>
  )
}

export default Homeboxs