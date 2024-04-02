import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API__URL } from '../../static/Index'



function Homecards() {
    const [data, setData]= useState([])
    const [count, setCount]= useState(4)
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
        setLoading(true)
        axios
           .get(`${API__URL}?limit=${count}`)
           .then(res=>setData(res.data))
           .catch(err=>console.log(err))
           .finally(()=> setLoading(false)) 
    },[count])
    let product = data?.map(el=>(
            <div key={el.id} className="card">
                <Link to={`/pages/${el.id}`}>
                <img src={el.image} alt="" className="card__img" />
                </Link>
                <div className="card__content">
                    <p className="card__categoriy">{el.category}</p>
                    <h3 className="card__title">{el.title}</h3>
                    {/* <p className="card__rating">{el.rating}</p> */}
                    <h4 className="card__price">{el.price} USD</h4>
                </div>
            </div>
           
    ))
  return (
    
    <div className='homecards  container'>
        {loading && <h2>Loading..</h2> }
        <h2 className="product__title">Popular product</h2>
        <div className="cards">
            {product}
        </div>
        <button onClick={()=>(setCount(p => p +4))} className="leranmore__btn">Learn more</button>
    </div>
  )
}

export default Homecards