import React from "react";
import "./AddProduct.css";
import { FaUpload } from "react-icons/fa";

export default function Addproducts() {
  return (
    <>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input type="text" name="name" placeholder="Enter product title.." />
        </div>

        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Old Price</p>
            <input type="text" name="old_price" placeholder="Type here" />
          </div>
          <div className="addproduct-itemfield">
            <p>New Price</p>
            <input type="text" name="new_price" placeholder="Type here" />
          </div>
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name="category" className="add-product-selector">
              <option value="none">Select category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="addproduct-itemfield">
            <label htmlFor="file-input">
              <div className="upload-container">
                <span>
                  <FaUpload />
                </span>
                <p>Upload Image</p>
              </div>
            </label>
            <input type="file" name="image" id="file-input" hidden />
            <button className="addproduct-btn">Add Product</button>
          </div>
        </div>
      </div>
    </>
  );
}
