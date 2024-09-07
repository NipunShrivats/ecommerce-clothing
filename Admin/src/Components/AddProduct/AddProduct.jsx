import React, { useState } from "react";
import "./AddProduct.css";
import { FaUpload } from "react-icons/fa";
import uploadArea from "../../assets/Admin_Assets/upload_area.svg";

export default function Addproducts() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      // await fetch();
    }
  };

  return (
    <>
      <div className="add-product">
        <h2>
          Add Product <hr />
        </h2>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Enter product title.."
            className="product-title-input"
          />
        </div>

        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Old Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder="Type here"
              className="old-price-input"
            />
          </div>
          <div className="addproduct-itemfield">
            <p>New Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder="Type here"
              className="new-price-input"
            />
          </div>
        </div>

        <div className="category-image">
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="add-product-selector"
            >
              <option value="none" className="option">
                Select category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="addproduct-itemfield upload-container-keupar">
            <label htmlFor="file-input">
              <div className="upload-container">
                <img
                  src={image ? URL.createObjectURL(image) : uploadArea}
                  alt=""
                  className="uploaded-img"
                />
              </div>
            </label>
            <input
              onChange={imageHandler}
              type="file"
              name="image"
              id="file-input"
              hidden
            />
          </div>
        </div>
        <button
          onClick={() => {
            Add_Product();
          }}
          className="addproduct-btn"
        >
          Add Product
        </button>
      </div>
    </>
  );
}
