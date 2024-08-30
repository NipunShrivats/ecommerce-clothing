import React, { useState } from "react";
import "./DescAndReview.css";
import Description from "../../Components/Description/Description";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

export default function DescAndReview() {
  return (
    <>
      <div className="DescAndReview container">
        <div className="all-box">
          <div className="DescAndReview-navigator">
            <div className="DescAndReview-nav-box">Description</div>
            <div className="DescAndReview-nav-box">Reviews(122)</div>
          </div>
          <Description />
        </div>
      </div>
    </>
  );
}
