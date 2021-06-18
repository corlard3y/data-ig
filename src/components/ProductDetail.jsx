import React,{useEffect} from 'react'
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
        <div>
            {title}
            <img src={image} alt=''/>
            {/* {image} */}
            ${price}
            {category}
            {description}
        </div>
    )
}



export default ProductDetail
