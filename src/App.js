import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import {Routers} from "./static/Router"
import Home from './pages/home/Home'
import NotFound from './pages/notfound/NotFound';
import SingleRoute from './pages/single-route/SingleRoute';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import Auth from './pages/auth/Auth';

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
      {/* <Route path='/auth' element={<Auth/>}>
        <Route path='/admin' element={<Admin/>}/>
      </Route> */}
      <Route path='*' element={<NotFound/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </div>
  );
}

export default App;
