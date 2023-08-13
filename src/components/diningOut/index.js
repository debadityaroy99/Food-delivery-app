import React from 'react'
import "./diningOut.css"
import Filters from '../common/filters'

const deliveryFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title: 'Filters',
  },

  {
    id:2,
    title: 'Pure Veg'
  }
]

const DiningOut = () => {
  return <div>
    <div className='max-width'>
       <Filters filterlist={deliveryFilters} />
       
    </div>
   
  </div>
}

export default DiningOut
