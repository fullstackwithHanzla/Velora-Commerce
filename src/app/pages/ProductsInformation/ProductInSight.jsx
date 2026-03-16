
import { useParams } from 'react-router-dom'
import { newProductsData } from '../../../features/settings/api';
import InformationCard from './InformationCard';
import AboutProduct from './AboutProduct';
import AboutProductData from './AboutProductData';
import { useState } from 'react';
import RelatedItems from './RelatedItems/RelatedItems';

const ProductInSight = () => {
const {slug} = useParams();
    const AboutProductFilter = ["description" , "specifications" , "extra Info" , "reviews"]
    const [filter,setFilter] = useState(AboutProductFilter[0])

    const product = newProductsData.find((item) => item.slug === slug)

    if(!product){
        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <p>No Product Found !</p>
            </div>
        )
    }

    
    
  return (
    <div className=' w-full bg-white flex flex-col justify-center py-10 gap-5 items-center'>
        <InformationCard product={product}/>
        <div className='bg-gray-600/10 w-full flex flex-col items-center justify-center'>
            <AboutProduct setFilter={setFilter} filter={filter} AboutProductFilter={AboutProductFilter}/>
            <AboutProductData product={product} filter={filter}/>
        </div>

          <div className=' w-full bg-white flex flex-col justify-start  gap-5 items-center'>
            <RelatedItems product={product}/>
        </div>
    </div>
  )
}

export default ProductInSight