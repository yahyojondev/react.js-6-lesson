import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API__URL } from '../../static/Index'
import Skeleton from '../../pages/skeleteon/Skeleton'



function Homecards() {
    const [data, setData]= useState([])
    const [count, setCount]= useState(4)
    const [loading,setLoading]= useState(false)
    const [categories,setCategories]= useState([])
    const [categoryValue,setCategoryValue] = useState("")

    useEffect(()=>{
        axios
           .get(`${API__URL}/categories`)
           .then(res=>setCategories(res.data))
           .catch(err=>console.log(err))
        //    .finally(()=> setLoading(false)) 
    },[])

    // console.log(categories);

    useEffect(()=>{
        setLoading(true) 

        let url = categoryValue === "" ? 
                                        `${API__URL}?limit=${count}` :
                                        `${API__URL}/categories/${categoryValue}?limit=${count}`
        axios
           .get(url)
           .then(res=>setData(res.data))
           .catch(err=>console.log(err))
           .finally(()=> setLoading(false)) 
    },[count,categoryValue])

     const getCategory = (text)=>{
        setCategoryValue(text)
        setData([])
     }
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

    let categoriesItem = categories?.map((el,inx)=><li onClick={()=> getCategory(el)} key={inx}>{el}</li>
      
    )
  return (
    
    <div className='homecards  container'>
        {/* <select onChange={e => setCategoryValue(e.target.value)} name="" id="">
            <option value="">All</option>
            {categoriesItem}
        </select> */}
        {loading && <Skeleton count={4}/> }
        <h2 className="product__title">Popular product</h2>
        <ul className="collection">
            <li onClick={()=> getCategory("")}>all</li>
            {categoriesItem}
        </ul>
        <div className="cards">
            {product}
        </div>
        <button onClick={()=>(setCount(p => p + 4))} className="leranmore__btn">Learn more</button>
    </div>
  )
}

export default Homecards