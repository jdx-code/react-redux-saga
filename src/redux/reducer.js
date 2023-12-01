import { ADD_TO_CART } from './constant'
 
export const cartData = (data = [], action) => {

    // if(action.type === ADD_TO_CART) {
    //     console.warn("reducer called", action)
    //     return action.data
    // } else {
    //     return "No action matched.."
    // }
    switch (action.type) {           
        case ADD_TO_CART:
            console.warn('ADD_TO_CART action type called', action)
            return [action.data, ...data]
        
        default:
            return data
                
    }

}