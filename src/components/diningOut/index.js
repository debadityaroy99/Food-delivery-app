import React from 'react'
import "./diningOut.css"
import Filters from '../common/filters'
import Collection from '../common/collection'
import { beverage } from '../../data/beverage'
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

const beverageList= beverage

const DiningOut = () => {
  return <div>
    <div className='max-width'>
       <Filters filterlist={deliveryFilters} />
       </div>
       <ExploreSection list={beverageList} collectionName='Beverages available'/>
       
    </div>
   
}

export default DiningOut
