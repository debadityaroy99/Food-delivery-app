import React, { useState } from 'react'
import './cart.css'

const AddToCart = () => {
    const [amount, setAmount] = useState(0);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(0);
      };
      const setIncrease = ()=>{
        setAmount(amount + 1)
      }


    return (

        <div className="amount-toggle absolute-center">
          <div className="cart-button">
          <button  onClick={() => setDecrease()}><span className='minus'>-</span>
          </button>
          </div>
          <div className="amount-style">{amount}</div>
          <div className="cart-button">           
          <button  onClick={() => setIncrease()}><span class='plus'>+</span>
          </button>
          </div>
        </div>
  )
}

export default AddToCart