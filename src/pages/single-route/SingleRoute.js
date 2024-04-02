import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API__URL } from '../../static/Index';
import { NavLink } from 'react-router-dom';
import { FaRegHeart,FaRegEye } from "react-icons/fa";

function SingleRoute() {
    const {id} = useParams()
    const [loading,setLoading]=useState(false)
    const [product,setProduct]= useState(null)

    useEffect(()=>{
        window.scrollTo(0,0)
        setLoading(true)
        axios
           .get(`${API__URL}/${id}`)
           .then(res=>setProduct(res.data))
           .catch(err=>console.log(err))
           .finally(()=>setLoading(false))
    },[])

    if(loading){
        return <h2>Loading...</h2>
    
    }
  return (
    <div className='single__wrapper container'>
        <div className="single__left">
            <h3 className="single__left__title">Product Category</h3> <hr />
            <ul className="single__left__list">
                <li className="single__left__item"><span>Juice & Drinks</span> [20]</li>
                <li className="single__left__item"><span>Juice & Drinks</span> [54]</li>
                <li className="single__left__item"><span>Juice & Drinks</span> [64]</li>
            </ul>
            <h4 className="single__left__title__one">Filter By Price</h4> <hr />
            <input className='single__left__input' type="range" />
            <p className="single__left__price__text">Price:$20-$250</p>
            <button className="single__btn">Filter</button>
            <h4 className="single__left__title__one">Product Category</h4> <hr />
            <ul className="single__left__list">
                <li className="single__left__item">Blue <div className="four1"></div></li>
                <li className="single__left__item">Yellow <div className="four2"></div> </li>
                <li className="single__left__item">Red <div className="four3"></div> </li>
                <li className="single__left__item">Green <div className="four4"></div> </li>
            </ul>
            <h4 className="single__left__title__one">weight</h4> <hr />
            <ul className="single__left__list">
                <li className="single__left__item">2kg Pack</li>
                <li className="single__left__item">20kg Pack</li>
                <li className="single__left__item">30kg Pack</li>
            </ul>
            <h4 className="single__left__title__one">Products Tages</h4> <hr />
            <div className="single__links">
                <NavLink className="single__link link1">Vagetobles</NavLink>
                <NavLink className="single__link link2">Juice</NavLink>
                <NavLink className="single__link link3">Food</NavLink>
                <NavLink className="single__link link4">Dry Fruits</NavLink>
                <NavLink className="single__link link5">Vagetobles</NavLink>
                <NavLink className="single__link link6">Juice</NavLink>
            </div>



            

            
            
            

        </div>
        <div className="single__right">
           <div className="single__right__top">
              <div className="single__right__images">
                <img src={product?.image} alt="" className="single__right__img" />
                <div className="img__wrapper">
                    <img src={product?.image} alt="" className="single__little__img" />
                    <img src={product?.image} alt="" className="single__little__img" />
                    <img src={product?.image} alt="" className="single__little__img" />
                    <img src={product?.image} alt="" className="single__little__img" />
                </div>
            </div>
            <div className="single__right__texts">
                <h2 className="single__right__title">{product?.title}</h2>
                <p className="single__right__text">{product?.description}</p> <hr />
                <h5 className="single__right__title__one"> Category:{product?.category}</h5>
                <h5 className="single__right__price"> Price:{product?.price} USD</h5>
                <div className="single__media__wrapper">
                    <div className="wrapper">
                        <button>+</button>
                        <button>1</button>
                        <button>-</button>
                    </div>
                    <button className="add__btn">Add To Cart</button>
                    <FaRegHeart className='single__rigth__svg' />
                    <FaRegEye  className='single__rigth__svg' />
                </div>
            </div>
           </div>
           <div className="single__right__bottom">
               <ul className="title__wrapper">
                   <li><NavLink>Desciption</NavLink> </li>  
                   <li> <NavLink>information</NavLink> </li>  
                   <li><NavLink>Review</NavLink> </li>  
               </ul> <hr />
               <p className="lorem__text">Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Doloribus, odit
                 odio, veniam dolorum excepturi mollitia aspernatur
                  quos iusto similique eligendi recusandae. Aperiam
                   eum incidunt dignissimos dolores voluptates! Possimus
                    mollitia quisquam molestias accusantium libero tenetur
                     eum architecto ipsa? Quasi illo, id consequuntur minima,
                at totam maiores vero nostrum nisi magni quibusdam.
                </p>
                <h4 className="title__single__lorem">Packaging & Delivery</h4> <hr />
                <p className="lorem__text">Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Vel quaerat dolorum enim
                 quidem, aperiam maxime! Vel ipsa accusamus voluptates iste.</p>
           </div>
        </div>
        
    </div>
  )
}

export default SingleRoute