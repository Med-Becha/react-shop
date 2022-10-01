import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Products from "../components/products/Products";
import Productbtn from "../components/products/Productbtn.jsx";
import Line from "../components/extra/Line";

const Single = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === +id);
  return (
    <div>
      <div
        id="single"
        className="row justify-content-center align-items-center text-white mx-auto"
      >
        <div className="col-md-6">
          <img
            src={require(`../images/${product.id}.jpg`)}
            alt=""
            className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold">{product.name}</h2>
          <div className="fs-5 mb-2">{product.price}</div>
          <p className="lead">
            {product.description}
          </p>
          <Productbtn />
        </div>
      </div>
      <Line />
      <Products Products={data.slice(0,4)}/>
    </div>
  );
};

export default Single;
