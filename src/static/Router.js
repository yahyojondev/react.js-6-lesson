import Home from "../pages/home/Home"
import Categoriy from "../pages/categoriy/Categoriy"
import Products from "../pages/products/Products"
import Pages from "../pages/Pages/Pages"
import Blog from "../pages/blog/Blog"
import Elements from "../pages/elements/Elements"
import boxbg1 from "../assets/images/onion.png"
import boxbg2 from "../assets/images/yogurt.png"
import boxbg3 from "../assets/images/vegetables.png"


export const  Routers =[
    {
        id:1,
        title:"Home",
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        title:"Categoriy",
        path:"/categoriy",
        element:<Categoriy/>
    },
    {
        id:3,
        title:"Products",
        path:"/products",
        element:<Products/>
    },
    {
        id:5,
        title:"Pages",
        path:"/Pages",
        element:<Pages/>
    },
    {
        id:6,
        title:"Blog",
        path:"/blog",
        element:<Blog/>
    },
    {
        id:7,
        title:"Elements",
        path:"/elements",
        element:<Elements/>
    },
]

export const HomeHeroproductRouters = [
    {
        id:1,
        title:"The best way to stuff your wallet.",
        titlelittle:" Organic Vegetables",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ametreiciendis beatae consequuntur.",
        text1:"shopping",
        text2:"Recipes",
        text3:"kitchen",
        text4:"News",
        text5:"Food"
    }
]

export const homeboxproduct =[
    {
      bg:boxbg1,
      id:1,
      title:"Everyday Fresh & Clean with OurProducts",
      btntext:"shop Now"
    },
    {
      bg:boxbg2,
      id:2,
      title:"Make your Breakfast Healthy and Easy",
      btntext:"shop Now"
    },
    { bg:boxbg3,
      id:3,
      title:"The best Organic Products Online",
      btntext:"shop Now"
    },
]

