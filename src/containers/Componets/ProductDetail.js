
import {useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";

import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../redux/actions/productAction";
function ProductDetail() {
    const product = useSelector((state) => state.productt);
    const {image, title, price,category,description}=product;
    const {productId}= useParams();
    const dispatch =useDispatch();
    console.log(product)
    const fetchProductDetail=async ()=> {
        const response = await axios.get(`http://fakestoreapi.com/products/${productId}`).catch(err=>{
            console.log('err', err)
        });
        dispatch(selectedProduct(response.data))
        console.log(response.data)
    }

    useEffect(()=>{
        if (productId && productId !== '')fetchProductDetail()
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId])

    return(
      <div className={'container'}>
          {Object.keys(product).length===0?(
              <div>...Loading</div>
          ):

              <div className="card mb-3 mt-4" >
                  <div className="row g-0">
                      <div className="col-md-6 text-center">
                          <img className={'img-fluid p-4 d_img '} src={image} alt=""/>
                      </div>
                      <div className="col-md-6">
                          <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text">${price}</p>
                              <p className="card-text">{category}</p>
                              <p className="card-text"> {description}</p>
                              <div className="btn btn-danger">Add to Cart</div>
                          </div>
                      </div>
                  </div>
              </div>
           }


      </div>
    )
}
export default ProductDetail;