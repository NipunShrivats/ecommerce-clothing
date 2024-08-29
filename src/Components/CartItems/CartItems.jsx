import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { dividerClasses } from "@mui/material";
import { RiCloseFill } from "react-icons/ri";

export default function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div className="title-line"></div>

      {/* <div>
        <div className="cartitem-format">
          <img src="" alt=""className="carticon-product-icon"/>
          <p>{}</p>
          <p>{}</p>
          <button className="cartitems-quantity"></button>
          <p>{}</p>
          <RiCloseFill className="" onClick={()=>{removeFromCart()}}/>
        </div>
        <div className="title-line"></div>
      </div> */}

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <RiCloseFill
                  className=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <div className="title-line"></div>
            </div>
          );
        }
      })}
    </>
  );
}
