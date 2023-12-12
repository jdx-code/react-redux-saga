import { SET_PRODUCT_LIST } from './constant'
 
export const productData = (data = [], action) => {

    switch (action.type) {           
        // case PRODUCT_LIST:
        //     console.warn('PRODUCT_LIST action type called', action)
        //     return [action.data, ...data]    
        case SET_PRODUCT_LIST :
            console.warn('SET_PRODUCT_LIST action type called', action)
            return [...action.data]    
        
        default:
            return data
                
    }

}