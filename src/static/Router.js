import Home from "../pages/home/Home"
import Categoriy from "../pages/categoriy/Categoriy"
import Products from "../pages/products/Products"
import Pages from "../pages/Pages/Pages"
import Blog from "../pages/blog/Blog"
import Elements from "../pages/elements/Elements"
import boxbg1 from "../assets/images/onion.png"
import boxbg2 from "../assets/images/yogurt.png"
import boxbg3 from "../assets/images/vegetables.png"
import adminimg from "../assets/images/adminimg.png"


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

export const adminproduct = [
    {
        id:1,
        title:"Admin",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandaenecessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumend  rerum quod. Tempora magniautem a voluptatibus neque.",
        image:adminimg
    }
]
export const admincards = [
    {
        id:1,
        title:"Product Packing",
        text:"Lorem ipsum dolor sit amet,consectetur adipisicing."
    },
    {
        id:2,
        title:"24X7 Support",
        text:"Lorem ipsum dolor sit amet,consectetur adipisicing."
    },
    {
        id:3,
        title:"Delivery in 5 Days",
        text:"Lorem ipsum dolor sit amet,consectetur adipisicing."
    },
    {
        id:4,
        title:"Payment Secure",
        text:"Lorem ipsum dolor sit amet,consectetur adipisicing."
    },
]

