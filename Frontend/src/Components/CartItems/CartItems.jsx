import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { dividerClasses } from "@mui/material";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <>
      <div className="cart-head-title">
        <h1 className="your-orders-title">View Your Orders</h1>
        <div className="title-line title-line-top"></div>
      </div>

      <div className="cartitems container">
        <div className="cartitems-format-main cart-heading">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="title-line-long cart-line"></div>

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <>
                <div key={e.id} className="cartitem-container">
                  <div className="cartitem-format cartitems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <p className="product-name">{e.name}</p>
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
                  <div className="title-line-long cart-line2"></div>
                </div>
              </>
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
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <div className="title-line-long"></div>
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
            </div>
            <div className="title-line-long"></div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>

          <div className="cartitems-promocode">
            <p>If you have a coupon code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="Enter Coupon Code" />
              <button>Submit</button>
            </div>
            <button className="proceed-btn">
              Checkout
              <span>
                <MdOutlineShoppingBag />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
