import React, { useState } from 'react'
import Header from '../../components/common/header'
import Tab0ption from '../../components/common/tabOption'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/diningOut'
const HomePage = () => {

    const[activeTab,setActiveTab]= useState("Food")

  return <div>
        <Header />
        <Tab0ption activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  
}

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Food":
            return <Delivery />
        case "Beverage":
            return <DiningOut />
        default:
            return <Delivery />
    }
}


export default HomePage 