import React from "react";
import "./AddProduct.css";

export default function Addproducts() {
  return (
    <>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input type="text" name="name" placeholder="Enter product title.." />
        </div>
      </div>
    </>
  );
}
