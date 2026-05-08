import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'
     
const CategoryPage = () => {
    const { categoryName } = useParams(); // URL se "Rolls" nikalega
    const { food_list } = useContext(StoreContext);
  
    return (
        <div className='category-page'>
            <h1>{categoryName} Special</h1>
            <div className='category-list'>
                {food_list.map((item, index) => {
                    if (categoryName === item.category) {
                        return <FoodItem key={index} {...item} />
                    }
                    return null;
                })}
            </div>
        </div>
    )
}
export default CategoryPage;