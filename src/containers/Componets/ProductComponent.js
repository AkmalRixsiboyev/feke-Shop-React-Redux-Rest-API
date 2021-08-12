import React from "react";
import '../main.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function ProductComponent() {
    const products = useSelector((state) => state.allProducers.products);
    // const {id, title}= products[0];
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (

            <div className="col-md-3 my-2" key={id}>
                <Link className={'text-decoration-none'} to={`/product/${id}`}>
                    <div className="card text-dark text">
                        <div className={'imge d-flex justify-content-center align-items-center  '}>
                            <img src={image} alt={title}/>

                        </div>
                        <div className="card-footer h-52 position-relative p-3  ">
                            <div className="fw-bold fs-7 h-75  overflow-auto ">{title}</div>
                            <div className="position-absolute bottom-0  pb-2">
                                <div className="fw-bold fs-6">${price}</div>
                                <div className="">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        )
    })

    return (
        <>{renderList}</>
    )
}

export default ProductComponent;