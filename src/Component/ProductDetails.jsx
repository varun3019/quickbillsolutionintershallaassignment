import React, {useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContex'
import './productdetails.css'

const ProductDetails = () => {
  const location = useLocation();
  console.log('Location:', location);
  let {cartItems,addToCart,removeFromCart, updateCartItemCount} = useContext(ShopContext)

  const { id,pname, price, img, pdetails, details } = location?.state || {};
  console.log(id)

  if (!location?.state) {
    console.log("1");
    return null;
  }

  return (
    <div className='productdetails'>
      <h2 className='pheading'>Product Details</h2>
      <div className='pitems'>
        <img src={img} alt='' />
        <p>{pname}</p>
        <p> ${price}</p>
        <p> {pdetails}</p>
        <p className='details'> {details}</p>
        <div className="addorremove">
          <button onClick={() => addToCart(id)}>+</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => removeFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
