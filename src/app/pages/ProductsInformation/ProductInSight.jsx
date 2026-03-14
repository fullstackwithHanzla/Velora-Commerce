
import { useParams } from 'react-router-dom'
import { newProductsData } from '../../../features/settings/api';
import InformationCard from './InformationCard';

const ProductInSight = () => {
const {slug} = useParams();

    const product = newProductsData.find((item) => item.slug === slug)

    if(!product){
        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <p>No Product Found !</p>
            </div>
        )
    }

    
    
  return (
    <div className='shadow-md w-full bg-white flex flex-col justify-center items-center py-20'>
        <InformationCard product={product}/>
    </div>
  )
}

export default ProductInSight