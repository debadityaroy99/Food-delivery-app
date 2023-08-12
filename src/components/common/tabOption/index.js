import React from 'react'

const Tab0ption = ({activeTab,setActiveTab}) => {
  return (
    <div>
        <button onClick={()=> setActiveTab("DiningOut")}>Click</button>
    </div>
  )
}

export default Tab0ption