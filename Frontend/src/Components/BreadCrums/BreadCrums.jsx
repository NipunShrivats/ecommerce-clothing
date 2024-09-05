import React from 'react'
import "./BreadCrums.css"
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCrums(props) {
    const { product } = props;
    return (
        <>
            <div className="breadcrums container">
                home <span><IoIosArrowForward /></span> shop <span><IoIosArrowForward /></span> {product.category} <span><IoIosArrowForward /></span> {product.name}
            </div>
        </>
    )
}
