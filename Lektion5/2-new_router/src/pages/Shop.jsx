
import ProductListItem from '../components/ProductListItem'
import axios from 'axios'
import {useLoaderData} from 'react-router-dom'

const Shop = () => {

const products = useLoaderData()



  return (
    <div className='shop'>
      { products && products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}
 export const loader = async ()=> {
  const res = await axios.get("https://fakestoreapi.com/products")
 if (res.status !== 200){
  throw new Error('could not fetch data ')
 }
   return res.data
}

export default Shop