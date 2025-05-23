import './Categories.css';
import { Link } from 'react-router-dom';
import { exemples } from './exmples';
import { categories } from '../../../test_API/test';


const Categories = () =>{
    return(
        <div className='w-60 rounded-sm p-5 space-y-5 bg-amber-100'>
            <div className='rounded-xl py-2 flex justify-center text-[#fffffff1] bg-amber-700'>
                <h2 className='font-bold'>Categories</h2>
            </div>
            <ul className='flex flex-col space-y-2 sm:space-1'>
                {
                    categories.map((categorie, index)=>(
                        <Link to={`/CategoriesPage/${categorie.name}`} key={index}>
                            <li className='border-b border-gray-500 hover:text-[#837b7bd3] hover:border-[#fff] hover:scale-100'>{categorie.name}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;