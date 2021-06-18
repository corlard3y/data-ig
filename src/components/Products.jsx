import React,{useEffect} from 'react'
// import PropTypes from 'prop-types'
import { useSelector,useDispatch } from 'react-redux';
import { setProducts } from '../Redux/Actions/productActions';
import Product from './Product';
import axios from 'axios';
import Spinner from './Spinner';

const Products = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    console.log("Products:" ,products);

    

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
                console.log("Err",err);
            }); 
            dispatch(setProducts(response.data));
        };
        fetchProducts();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Product />
            
        </div>
    )
}

// Products.propTypes = {

// }

export default Products;
