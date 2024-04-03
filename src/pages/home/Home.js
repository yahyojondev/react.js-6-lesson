import React from 'react'
import Homehero from '../../components/hero/Homehero'
import Homeboxs from '../../components/section/Homeboxs'
import Homecards from '../../components/section/Homecards'
import Login from '../login/Login'
import Admin from '../admin/Admin'

function Home() {
  return (
    <div className='Home'>
        <Homehero/>
        <Homeboxs/>
        <Homecards/>
        {/* <Login/> */}
        {/* <Admin/> */}
    </div>
  )
}

export default Home