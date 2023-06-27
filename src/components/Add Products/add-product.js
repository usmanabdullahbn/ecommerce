// Add Product component!

import React, { useEffect, useState } from "react";
import "./style.css"

const AddProduct = () => {
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productList: [],
    authUser: null
  });

  // Component is mount...!
  useEffect(() => {
    if (localStorage.getItem("Products") != null) {
      let fetchProducts = localStorage.getItem("Products");
      fetchProducts = JSON.parse(fetchProducts);
      // console.log(fetchProducts);
    

      let fetchAuth = localStorage.getItem("AuthenticatedUser");
      fetchAuth = JSON.parse(fetchAuth);
      // console.log(fetchAuth);
      setState({ ...state, authUser: fetchAuth, productList: fetchProducts });
    }
  
    
  }, []);


  const addProduct =() => {
    let projectObj ={
      productName: state.productName,
      productDescription: state.productDescription,
      productPrice: state.productPrice,
      venderId: state.authUser.email
    }
    let productListClone = [...state.productList]
    productListClone.push(projectObj)
    setState({...state, productList: productListClone, 
    productName:"",
    productDescription:"",
    productPrice:""
  })
  }

  // THis Hook will work on every update of productList!

  useEffect(()=> {
    if (state.productList.length > 0){
      localStorage.setItem("Products",JSON.stringify(state.productList))
    }
  } ,[state.productList])
  return (
    <>
    <div className="add-product">
      <div className="form-container">
      <h1 className="heading">Add Product</h1>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={state.productName}
            onChange={(e) => setState({ ...state, productName: e.target.value })}
          />
        <br />
          <input
            type="text"
            placeholder="Enter Product Description"
            value={state.productDescription}
            onChange={(e) => setState({ ...state, productDescription: e.target.value })}
          />
        <br />
          <input
            type="number"
            placeholder="Enter Amount"
            value={state.productPrice}
            onChange={(e) => setState({ ...state, productPrice: e.target.value })}
          />
        <br />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
    </>
  );
};
export default AddProduct;


      // <h1>Add Product</h1>
      // <div>
      //   <label>
      //     Name:
      //     <input
      //       type="text"
      //       placeholder="Enter Product Name"
      //       value={state.productName || ""}
      //       onChange={(e) => setState({ ...state, productName: e.target.value })}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Description
      //     <input
      //       type="text"
      //       placeholder="Enter Product Description"
      //       value={state.productDescription || ""}
      //       onChange={(e) => setState({ ...state, productDescription: e.target.value })}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Price:
      //     <input
      //       type="number"
      //       placeholder="Enter Amount"
      //       value={state.productPrice || ""}
      //       onChange={(e) => setState({ ...state, productPrice: e.target.value })}
      //     />
      //   </label>
      //   <br />
      //   <button onClick={addProduct}>Add Product</button>
      // </div>