import React from 'react'
import HomePage from './pages/home'
// import Cart from ''
import { BrowserRouter,Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter as router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <Route path="/cart" exact element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App