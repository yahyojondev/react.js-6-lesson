import React from 'react'
import { adminproduct } from '../../static/Router'
import { admincards } from '../../static/Router'

function Admin() {
    let adminproducts = adminproduct?.map(el=>(
              <div key={el.id} className="admin__wrapper">
                <div className="admin__left">
                    <h1 className="admin__title">{el.title}</h1>
                    <p className="admin_text">{el.text}</p>
                    <p className="admin_text">{el.text}</p>
                    <p className="admin_text">{el.text}</p>
                    <ul className="admin__number__wrapper">
                       <li className="admin__number__item"><p>0.1K</p><span>Vendor</span></li>
                       <li className="admin__number__item"><p>23K</p><span>Customer</span></li>
                       <li className="admin__number__item"><p>2K</p><span>Products</span></li>
                    </ul>
                </div>
                <div className="admin__right">
                    <img src={el.image} alt="" />
                </div>
             </div>
    ))
    let adminitems = admincards?.map(el=>(
       <div key={el.id} className="admin__card">
                    <h4 className="card__title">{el.title}</h4>
                    <p className="card__text">{el.text}</p>
                </div>
    ))
  return (
    <div className="admin">
        <div className="container">
            <div className="wrapper">
                {adminproducts}
            <div className="admin__cards">
                 {adminitems}           
            </div>
            </div>
        </div>
    </div>
  )
}

export default Admin