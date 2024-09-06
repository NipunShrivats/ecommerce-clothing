import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import add_product_icon from "";
import { FaOpencart } from "react-icons/fa";
import { LuListPlus } from "react-icons/lu";

export default function Sidebar() {
  return (
    <>
      <div className="container1">
        <div className="sidebar">
          <Link to="/addproduct" className="addproduct">
            <button className="btn1">
              <span>
                <FaOpencart />
              </span>
              <p>Add Product</p>
            </button>
          </Link>

          <Link to="/listproduct" className="addproduct">
            <button className="btn2">
              <span>
                <LuListPlus />
              </span>
              <p>Product List</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
