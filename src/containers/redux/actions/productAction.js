import {REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCTS, SET_PRODUCTS} from "../contants/action-types";


export  const  setProducts = (products)=> {
    return{
        type: SET_PRODUCTS,
        payload :products
    }
}
export const  selectedProduct = (product)=> {
    return{
        type: SELECTED_PRODUCTS,
        payload :product
    }
}

export const  removeSelectedProduct = ()=> {
    return{
        type: REMOVE_SELECTED_PRODUCTS,

    }
}