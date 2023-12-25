import React, { useState,useEffect } from 'react'
import{useNavigate} from 'react-router-dom'
import Popup from 'reactjs-popup';
import './checkout.css'


const CheckOut = () => {

    let [formData,setFormData]=useState({firstname:'',email:"",phone:"",address:""});
    const navigate = useNavigate()

    const handleInputChange = (e)=>
    {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
    }

    const handlereload =()=>
    {
        window.location.reload()
        alert("Congratulation! Order Confirmed");
    }


    return (
        <div className='checkout'>
            <h2>CheckOut</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" onChange={handleInputChange} placeholder='Please Enter Your Name' name='firstname' value={formData.firstname}/><br />
                <input type="email" onChange={handleInputChange} placeholder='Please Enter Your Email' name='email' value={formData.email}/><br />
                <input type="number" onChange={handleInputChange}  placeholder='Please Enter Your Phone' name='phone'value={formData.phone}/><br />
                <textarea name="address" onChange={handleInputChange} placeholder= 'Please Enter Your Address 'id="" cols="20" rows="10" value={formData.address} ></textarea><br />
                <button  onClick={()=>navigate('/cart')}>Review Items in Cart?</button><br /><br /><br />
                <Popup trigger=
                {<button onSubmit={handleSubmit} className='popupbtn'> Click to See CheckOut Details and Confirm Order </button>}
                position="right center">
                <div>
                <p>{formData.firstname}</p></div>
                <p>{formData.email}</p>
                <p>{formData.phone}</p>
                <p>{formData.address}</p>
                <button onClick={handlereload} className='popupbtn'>Confirm Order</button>
            </Popup>
            </form>
        </div>
    )
}

export default  CheckOut