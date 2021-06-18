import React,{useEffect,Fragment} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../Redux/Actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state)=>state.product);
    const {image,title,price,category,description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId,product);

    useEffect(() => {
        const fetchProductDetail = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
                console.log("Err",err);
            }); 
            dispatch(selectedProduct(response.data));
        };
       if(productId && productId!== "") fetchProductDetail();
       
       
       
       return () => {
           dispatch(removeSelectedProduct())
       };
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);
    return (
        <Fragment>
        <h1 className='text-center font-bold mt-8'>{title}</h1>
        <div className='md:flex md:flex-row'>
            <div className='p-8'><img src={image} alt='' className='w-full sm:w-60'/></div>
            <div className='text-xs m-4 p-2 border rounded-lg'>
                <span className='font-bold'>${price}</span> <br></br>
                <span>{description}</span> <br></br>
                <span className='text-xs italic p-4'>{category}</span>
                </div>
        </div>
        </Fragment>
    )
}



export default ProductDetail
