import React, { useEffect, useState, useContext } from "react";
import { Sugar } from "react-preloaders";

import "./Product.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescAndReview from "../../Components/DescAndReview/DescAndReview";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-cover">
          <Sugar />
        </div>
      ) : (
        <>
          <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product} />
            <DescAndReview />
            <RelatedProducts />
          </div>
        </>
      )}
    </>
  );
}
