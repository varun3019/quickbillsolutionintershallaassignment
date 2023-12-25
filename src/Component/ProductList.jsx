import React, { useContext } from 'react'
import './productList.css'
import { ShopContext } from '../context/ShopContex'
import{useNavigate} from 'react-router-dom'

const ProductList = ({id,pname,price,img,pdetails,details}) => {

    let {addToCart,cartItems} = useContext(ShopContext)
    const navigate = useNavigate()
    const handleProductDetails = () => {
        navigate(`/ProductDetails/${id}`, { state: { pname, price, img, pdetails,details,id } });
      };

    const cartItemsAmount = cartItems[id]
    return (
                <div className='list'> 
                    <img src={img} alt="" />
                    <p className='pname'><b>{pname}</b></p>
                    <p className='price'> ${price}</p>
                    <p className='pdetails'><b>{pdetails}</b></p>
                    <button onClick={()=> addToCart(id)}>Add to Cart Button {cartItemsAmount>0 &&<>({cartItemsAmount})</>}</button><br />
                    <button onClick={handleProductDetails}>Product Details </button>
                </div>
    )
}

export default ProductList