import React, { useContext } from 'react'
import products from '../data/products'
import CartItem from './CartItem'
import { ShopContext } from '../context/ShopContex'
import './cart.css'
import{useNavigate} from 'react-router-dom'

const  Cart = () => {
    let {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount=getTotalCartAmount()
    let navigate =useNavigate()

    return (
        <div className='cart'>
        <div>
            <h1 style={{textAlign:"center"}}>Your Cart items</h1>
        </div>
        <div className='cartitem'>
        {products.map((product)=>
        {
            if(cartItems[product.id]!==0)
            {
                return <CartItem data ={product}/>
            }
        })}
        </div>
        {totalAmount>0?
        <div className="total">
            <p>Total: <b>${totalAmount}</b></p>
            <button className='btn1' onClick={()=>navigate('/')}>Continue Shopping</button>
            <button className='btn2' onClick={()=>navigate('/checkout')}>CheckOut</button>
        </div>
        :<h1 style={{color:"red",textAlign:"center"}}>Your Cart is Empty</h1>}
        </div>
    )
}

export default  Cart