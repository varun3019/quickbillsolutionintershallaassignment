import React from 'react'
import products from '../data/products'
import ProductList from './ProductList'
import './shop.css'

const  Shop= () => {
    return (
        <div className='shop'>
            {products.map(({pname,price,img,pdetails,id,details})=>
            {
                return <ProductList  key= {id} id={id} pname= {pname} price= {price} img= {img} pdetails= {pdetails} details= {details}/>
            })}
        </div>
    )
}

export default Shop
