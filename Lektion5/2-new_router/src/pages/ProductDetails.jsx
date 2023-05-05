
import { useParams, useLoaderData } from 'react-router-dom'
import axios from "axios"



const ProductDetails = () => {

  const product = useLoaderData()

  // const [product, setProduct] = useState(null)
  // const { id } = useParams();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const res = await fetch('https://fakestoreapi.com/products/' + id)
  //     const data = await res.json()
  //     setProduct(data)
  //   }
  //   getProduct()
  // }, [])


  return (
    <div>
      { product && (
        <div className="product-details">
          <h2>{product.title}</h2>
          <div className="d-flex">
            <div className="product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-desc">
              <p>{product.description}</p>
              <p className='product-price'>Price: ${product.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export const loader = async ({params}) => {

  const res = await axios.get('https://fakestoreapi.com/products/' + params.id)
  if(res.status !== 200) {
    throw new Error('Could not fetch the data')
  }
  return res.data
}
export default ProductDetails

