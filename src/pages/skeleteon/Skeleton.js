import React from 'react'

function Skeleton({count=4}) {
  return (
    <div className="skeleton__wrapper">
        {
            Array(count).fill("").map((_,inx)=>(

        <div key={inx} className="skeleton__card">
            <div src="" alt="" className="skeleton__img skeleton__anime" />
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
        </div>
            ))
        }
    </div>
  )
}

export default Skeleton