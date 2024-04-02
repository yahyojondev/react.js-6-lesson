import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import {Routers} from "./static/Router"
import Home from './pages/home/Home'
import NotFound from './pages/notfound/NotFound';
import SingleRoute from './pages/single-route/SingleRoute';

function App() {
  return (
   <div className='app'>
    <Navbar/>
    <Routes>
      {/* {
        Routers?.map(el=>(
           <Route key={el.id} path={el.path} element={el.title}/>
        ))
      } */}
      <Route path='/' element={<Home/>}/>
      <Route path="/pages/:id" element ={<SingleRoute/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </div>
  );
}

export default App;
