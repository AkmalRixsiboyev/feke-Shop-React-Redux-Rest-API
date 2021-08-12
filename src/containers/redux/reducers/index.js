import {combineReducers} from "redux";
import {productReducer, selectedProductReducer} from "./productReducer";

 const reducers = combineReducers({
    allProducers: productReducer,
     productt:selectedProductReducer
})
export default reducers;