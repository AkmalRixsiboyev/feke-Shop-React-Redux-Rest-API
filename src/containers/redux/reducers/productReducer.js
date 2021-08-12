import {SET_PRODUCTS} from "../contants/action-types";

const  initialState ={
    products:[],
};
export const productReducer = ( state = initialState, { type, payload})=>{
    switch (type){
        case SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
};