// My Product component!

import React, { useEffect, useState } from "react";
import "./style.css";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const MyProduct = () => {
  const [productsList, setProductsList] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  // Component is mount...!
  useEffect(() => {
    if (localStorage.getItem("Products") != null) {
      let fetchProducts = localStorage.getItem("Products");
      fetchProducts = JSON.parse(fetchProducts);
      fetchProducts && setProductsList(fetchProducts);

      let fetchUser = localStorage.getItem("AuthenticatedUser");
      fetchUser = JSON.parse(fetchUser);
      fetchUser && setAuthUser(fetchUser);
    } else {
      localStorage.setItem("Products", JSON.stringify([]));
    }
  }, []);

  let key = 0;
  const handleDelete = (index) => {
    let fetchProducts = localStorage.getItem("Products");
    fetchProducts = JSON.parse(fetchProducts);
    fetchProducts.splice(index, 1);
    //  console.log(fetchProducts)
    localStorage.setItem("Products", JSON.stringify(fetchProducts));
    window.location.reload("/my-products");
  };

  const navigate = useNavigate();
  // console.log(productsList)
  return (
    <>
      <h1 className="h1">My Products</h1>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">Name:</th>
            <th scope="col">Description:</th>
            <th scope="col">Price:</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {productsList.length > 0 ? (
            productsList.map((item, index) => {
              return item.venderId === authUser.email ? (
                <>
                  <tr>
                    <td>{item.productName}</td>
                    <td>{item.productDescription}</td>
                    <td>{item.productPrice}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className="btn"
                      >
                        <MDBIcon fas icon="trash" />
                      </button>
                    </td>
                  </tr>
                </>
              ) : null;
            })
          ) : (
            <>
              <h1 className="">No Data Found</h1>
            </>
          )}
      <button onClick={() => navigate("/add-product")} id="fixed-btn">
        <MDBIcon far icon="plus-square" className="icon" />
      </button>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};
export default MyProduct;

{
  /* <div className="product-item" key={index}>
  <h2>
    {`Item: ${item.productName}`}
    <br />
    {`Description: ${item.productDescription}`}
    <br />
    {`Price: ${item.productPrice}`}
  </h2>
</div> */
}

// <>
//   <h1>My Products</h1>
//   {
//     (productsList.length > 0)
//     ?
//     (
//       productsList.map((item, index) => {
//         return(
//           item.venderId == authUser.email
//           ?
//           <div key={index}>
//           <h2>{`Item: ${item.productName}. Price: ${item.productPrice}`}</h2>
//         </div>
//         : null
//         )
//       })
//     )
//     :
//     (<h1>No Data Found</h1>)
//   }
// </>
