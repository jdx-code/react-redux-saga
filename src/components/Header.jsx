import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const result = useSelector((state) => state.cartData)
    console.warn("redux data in header", result)

  return (
    <div>
        Items in cart : {result.length}
    </div>
  )
}

export default Header