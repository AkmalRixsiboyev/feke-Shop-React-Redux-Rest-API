import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productAction";

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch= useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get('http://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Err', err);
            })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className={' row my-3 '}>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;