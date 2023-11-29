import './App.css'
import {addToCart} from './redux/action'
import { useDispatch } from 'react-redux'

function App() {
  
  const dispatch = useDispatch()

  const product = {
    name: 'I phone',
    category: 'smartphone',
    price: 60000
  }

  return (
    <>
      <button onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>      
    </>
  )
}

export default App
