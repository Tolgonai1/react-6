import axios from "axios";

const defaultState = {
    products : []
}
export const productsReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state,products: action.payload}
        default:
            return state
    }
}

export const fetchProducts =()=>{
    return async (dispatch) =>{
        const resp = await axios.get('https://dummyjson.com/products?limit=10&skip=10')
        return dispatch(setProducts(resp.data.products))
    }
}

export const setProducts = (payload) => ({type : 'SET_PRODUCTS',payload})