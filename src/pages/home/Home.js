import React from 'react'
import Homehero from '../../components/hero/Homehero'
import Homeboxs from '../../components/section/Homeboxs'
import Homecards from '../../components/section/Homecards'

function Home() {
  return (
    <div className='Home'>
        <Homehero/>
        <Homeboxs/>
        <Homecards/>
    </div>
  )
}

export default Home