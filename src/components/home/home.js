// All Product component!

import React, { useEffect, useState } from "react";
import "./style.css";


const Home = () => {
  const [productsList, setProductsList] = useState([]);

  // Component is mount...!
  useEffect(() => {
    if (localStorage.getItem("Products") != null) {
      let fetchProducts = localStorage.getItem("Products");
      fetchProducts = JSON.parse(fetchProducts);
      fetchProducts && setProductsList(fetchProducts);
    } else {
      localStorage.setItem("Products", JSON.stringify([]));
    }
  }, []);

  // console.log(productsList)
  return (
    <>
      <h1 className="h1">All Products</h1>
      
      <div className="products-container">
        {productsList.length > 0 ? (
          productsList.map((item, index) => {
            return( 
              <div className="product-item" key={index}>
                <h2>
                  {`Item: ${item.productName}`}
                  <br />
                  {`Description: ${item.productDescription}`}
                  <br />
                  {`Price: ${item.productPrice}`}
                </h2>
              </div>
            )
           
          })
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
    </>
  );
};
export default Home;
