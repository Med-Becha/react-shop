import React from "react";
import Product from "./Product";

const Products = ({ Products = [] }) => {
  return (
    <div className="px-lg-5 text-dark">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
        {Products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

