import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContex'
import './CartItem.css'

const CartItem = (props) => {

    const {id,pname,price,img,pdetails} = props.data;
    let {cartItems,addToCart,removeFromCart, updateCartItemCount} = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <img src={img}/>
            <div className="description">
                <p className='pname'><b>{pname}</b></p>
                <p className='price'>${price}</p>
                <div className='countHandler'>
                    <button onClick={()=>addToCart(id)}>+</button>
                    <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={()=>removeFromCart(id)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem