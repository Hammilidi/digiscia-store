import './Item.css';
//import image from './laptop-pencils-arrangement.jpg'
//import image from './Laptop.jpeg'
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Reducers/cart/cartContext';
import { useContext, useEffect, useState } from 'react';
import { CartProvider } from '../../Reducers/cart/cartContext';
import { getProducts } from '../../api/product';
import { Button } from '../ui/button';
import { getProductRate } from '../../api/product';

const Item = ({id,name,description,price,available,stock,category,image}) => {
    const { dispatch } = useContext(cartContext);
    const [ rate,setRate ] = useState(0)
    useEffect(()=>{
        getProductRate(id)
        .then(data=>{
            setRate(data)
        })
    },[])
    return(
        <div className="flex flex-col justify-between w-50 max-w-sm bg-[#ffffffd2] border border-gray-200 rounded-lg shadow-2xl hover:scale-105 duration-300 ">
            <div className='flex h-50'>
                <img className="p-8 w-full  h-full" src={image} alt="product image" />
            </div>
            <div className="px-5 pb-5 flex flex-col justify-start">
                <Link to={`/Description/${name}`}>
                    <h5 className="text-sm font-semibold ">{name}</h5>
                </Link>
                <div className="flex items-center mt-0.5 mb-1 gap-1">
                    <span className="bg-blue-100 text-blue-800  px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{rate}.0</span>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-900 font-bold">{price} DHS</span>
                    <Button className="text-white bg-amber-400  text-center active:scale-110 transition-transform duration-100 hover:cursor-pointer" 
                    onClick={()=>{
                        const product= getProducts.data.find(element=>element.id == id)
                        console.log("products =>",product)
                        dispatch({
                        type :"product/add", 
                        payload: {
                            id,
                            product,
                            count: 1,
                            preprice: price
                        } 
                    })}}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Item;

/*
    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
*/