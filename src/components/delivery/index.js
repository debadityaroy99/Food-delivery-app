import React from 'react'
import "./delivery.css"
import Filters from '../common/filters'
import DeliveryCollection from './deliveryCollection'
import ExploreSection from '../common/exploreSection'

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

const Delivery = () => {
  return <div>
    <div className='max-width filter-adjustment'>
       <Filters filterlist={deliveryFilters} />
       
    </div>
   
   <DeliveryCollection />
   <ExploreSection />
  </div>
}

export default Delivery