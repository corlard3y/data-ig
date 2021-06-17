import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Product = () => {
    const products = useSelector((state)=>state.allProducts.products);
    // const {id,title,image,price,category} = products;
    return (
        <div>
           {products.map((product) => {
               return(
               <div key={product._id}>
                   {product.title}
               </div>)
           })}
        </div>
    )
}

// Product.propTypes = {

// }

export default Product
