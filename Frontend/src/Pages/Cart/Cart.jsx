import React, { useEffect, useState, useContext } from "react";
import { Sugar } from "react-preloaders";
import CartItems from "../../Components/CartItems/CartItems";

export default function Cart() {
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
          <CartItems />
        </>
      )}
    </>
  );
}
