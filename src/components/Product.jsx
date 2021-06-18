import React,{Fragment} from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Product = () => {
    const products = useSelector((state)=>state.allProducts.products);
    // const {id,title,image,price,category} = products;
    return (
        <Fragment>
            {Object.keys(products).length === 0 ? <Spinner /> : 
        <div className='w-full flex justify-center flex-wrap'>
           {products.map((product) => {
               return(
               <li key={product.id} className='flex-0 w-full sm:w-1/4 border rounded-md list-none m-4'>
                   <Link to={`/product/${product.id}`}>
                   <div className='flex-1'>
                       <div className='flex justify-center p-4'>
                       <img src={product.image} alt='' className='rounded-lg w-auto h-auto sm:w-48 sm:h-48'/>
                       </div>
                       <hr className='w-full'></hr>
                      
                      
                       <div className='p-2'>
                       <strong className='font-bold'>
                               {product.title}
                       </strong>
                       <div className='font-serif italic'>
                           $ {product.price}
                       </div>
                       <div className='text-xs'>{product.category}</div>
                       </div>
                   </div></Link>
               </li>)
           })}
        </div>}
        </Fragment>
    )
}

// Product.propTypes = {

// }

export default Product
