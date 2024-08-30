import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { dividerClasses } from "@mui/material";
import { IoMdTrash } from "react-icons/io";

export default function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <div className="cartitems container">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="title-line-long"></div>

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitem-format cartitems-format-main">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}/-</p>
                  <div className="cartitems-quantity-div">
                    <button className="cartitems-quantity">
                      {cartItems[e.id]}
                    </button>
                  </div>
                  <p>₹{e.new_price * cartItems[e.id]}/-</p>
                  <IoMdTrash
                    className="remove-btn"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                </div>
                <div className="title-line-long"></div>
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{0}</p>
              </div>
              <div className="title-line-long"></div>
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <div className="title-line-long"></div>
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>₹{0}</h3>
            </div>
          </div>
          <button>proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a coupon code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
