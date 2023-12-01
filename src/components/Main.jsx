import { addToCart } from '../redux/action'
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
            <button onClick={() => dispatch(addToCart(product))}>
                Add To Cart
            </button>      
        </div>        
    </>
  )
}

export default Main
