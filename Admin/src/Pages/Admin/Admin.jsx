import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";

export default function Admin() {
  return (
    <>
      <div className="admin">
        <Sidebar />
        <Routes>
          <Route
            path="/addproduct"
            exact={true}
            element={<AddProduct />}
          ></Route>
          <Route
            path="/listproduct"
            exact={true}
            element={<ListProduct />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}
