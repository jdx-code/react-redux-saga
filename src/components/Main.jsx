import { addToCart, removeFromCart } from '../redux/action'
import { useDispatch } from 'react-redux'

function Main() {
  
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
            <button onClick={() => dispatch(addToCart(product))}>
                Empty Cart
            </button>      
          </div>                       
        </div>        
    </>
  )
}

export default Main
