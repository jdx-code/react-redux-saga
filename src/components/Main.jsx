import { addToCart, removeFromCart, emptyCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction'

function Main() {

  const result = useSelector((state) => state)
  console.warn("redux data in main", result)
  
  const dispatch = useDispatch()

  const product = {
    name: 'I phone',
    category: 'smartphone',
    price: 60000
  }

  return (
    <>
        <div>
          <div>
            <button onClick={() => dispatch(addToCart(product))}>
                Add To Cart
            </button>
          </div>
          <div>
            <button onClick={() => dispatch(removeFromCart(product))}>
                Remove From Cart
            </button>
          </div>  
          <div>
            <button onClick={() => dispatch(emptyCart())}>
                Empty Cart
            </button>      
          </div> 
          <div>
            <button onClick={() => dispatch(productList())}>
                Get Product List
            </button>      
          </div>                       
        </div>        
    </>
  )
}

export default Main
