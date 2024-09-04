import React, { useContext, useState } from "react";
import "./ProductDisplay.css";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [value, setValue] = useState(4);
  return (
    <>
      <div className="productDisplay container">
        <div className="productDisplay-Left">
          <div className="productDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productDisplay-img">
            <img
              src={product.image}
              alt=""
              className="productDisplay-main-img"
            />
          </div>
        </div>

        <div className="productDisplay-Right">
          <div className="productDisplay-Right-inside">
            <h1 className="heading">{product.name}</h1>
            <div className="productDisplay-right-star">
              <Box sx={{ "& > legend": { mt: 2 } }} className="box">
                {/* <Typography component="legend">Read only</Typography> */}
                <Rating name="read-only" value={value} readOnly />
                <p>(122 Reviews)</p>
              </Box>
            </div>
            <div className="productDisplay-Right-Prices">
              <div className="productDisplay-right-price-old">
                ₹{product.old_price}
              </div>
              <div className="productDisplay-right-price-new">
                ₹{product.new_price}/-
              </div>
            </div>

            <div className="productDisplay-right-description">
              {product.description}
            </div>
            <div className="productDisplay-right-size">
              <h1>Select Size</h1>
              <div className="productDisplay-right-size">
                <div>
                  <p>S</p>
                </div>
                <div>
                  <p>M</p>
                </div>
                <div>
                  <p>L</p>
                </div>
                <div>
                  <p>XL</p>
                </div>
                <div>
                  <p>XXL</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product.id);
              }}
            >
              ADD TO CART
            </button>

            <div>
              <p className="productDisplay-right-category">
                {" "}
                <span>Category: </span> Woman, T-shirt, Crop Top
              </p>
              <p className="productDisplay-right-category">
                {" "}
                <span>Tags: </span>Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
