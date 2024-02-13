
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../../State/Product/productAction";

import DisplayProducts from "./DisplayProduct";

let ProductComponent = (props) => {

    let name = useRef(null)
    let price = useRef(null)
    let desc = useRef(null)
    let rating = useRef(null)

    let product = useSelector((state) => state.ProductReducer.Product)

    let dispatchProduct = useDispatch(); //dispatch to DB,store

    useEffect(() => {
        name.current.value = product.name
        price.current.value = product.price
        desc.current.value = product.desc
        rating.current.value = product.rating
    }, [])

    let saveProductClick = (evt)=>{
        let productToSave = {
            name : name.current.value,
            price : price.current.value,
            desc : desc.current.value,
            rating : rating.current.value
        }

        alert("We are going to save this product!!! "+ JSON.stringify(productToSave))

        dispatchProduct(saveProduct(productToSave)) //dispatch the action to access the product we going to save
        evt.preventDefault();
    }

    return (
        <>
            <h1 className="col-md-12">Product component</h1>

            <form className={"form componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25}
                            placeholder="Product Name" />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" ref={price}
                            placeholder="Product Price" />
                    </div>

                    <div className="col-md-12">
                        <b>Description </b>
                        <input type="text" className="form-control col-md-6" ref={desc}
                            placeholder="Please Describe the product" />
                    </div>

                    <div className="col-md-12">
                        <b>Ratings </b>
                        <input type="text" className="form-control col-md-6" ref={rating}
                            placeholder="Ratings" />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"}
                        value={"Save Product"}
                        onClick={saveProductClick} />
                </div>
            </form>
            <hr />
            <DisplayProducts />
        </>
    )

}

export default ProductComponent;






// import React, { useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { saveProduct } from "../../../State/Product/productAction";

// import DisplayProducts from "./DisplayProduct";

// let ProductComponent = (props) => {
//     // Refs for form inputs
//     let name = useRef(null);
//     let price = useRef(null);
//     let desc = useRef(null);
//     let rating = useRef(null);

//     // Accessing the current user and product from the Redux store
//     let currentUser = useSelector((state) => state.UserReducer.currentUser);
//     let product = useSelector((state) => state.ProductReducer.Product);

//     // Dispatch function from Redux
//     let dispatchProduct = useDispatch();

//     // Populate form fields when the component mounts or the product changes
//     useEffect(() => {
//         if (product) {
//             name.current.value = product.name || '';
//             price.current.value = product.price || '';
//             desc.current.value = product.desc || '';
//             rating.current.value = product.rating || '';
//         }
//     }, [product]); // Dependency array includes product

//     // Function to handle the save product button click
//     let saveProductClick = (evt) => {
//         let productToSave = {
//             name: name.current.value,
//             price: price.current.value,
//             desc: desc.current.value,
//             rating: rating.current.value,
//         };

//         alert("We are going to save this product!!! " + JSON.stringify(productToSave));

//         dispatchProduct(saveProduct(productToSave)); // Dispatching the saveProduct action
//         evt.preventDefault();
//     };

//     return (
//         <>
//             <h1 className="col-md-12">Product Component</h1>

//             {/* Conditional rendering based on whether the current user is "admin" */}
//             {currentUser && currentUser.name === "admin" && (
//                 <form className="form componentClass">
//                     <div className="form col-md-8">
//                         <div className="col-md-12">
//                             <b>Product Name</b>
//                             <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25}
//                                 placeholder="Product Name" />
//                         </div>
//                         <div className="col-md-12">
//                             <b>Price </b>
//                             <input type="number" className="form-control col-md-6" ref={price}
//                                 placeholder="Product Price" />
//                         </div>
//                         <div className="col-md-12">
//                             <b>Description </b>
//                             <input type="text" className="form-control col-md-6" ref={desc}
//                                 placeholder="Please Describe the product" />
//                         </div>
//                         <div className="col-md-12">
//                             <b>Ratings </b>
//                             <input type="text" className="form-control col-md-6" ref={rating}
//                                 placeholder="Ratings" />
//                         </div>
//                         <input type="button" className="form-control btn btn-primary col-md-3"
//                             value="Save Product"
//                             onClick={saveProductClick} />
//                     </div>
//                 </form>
//             )}

//             <hr />
//             <DisplayProducts />
//         </>
//     );
// };

// export default ProductComponent;



