import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import Productbtn from "../components/products/Productbtn.jsx";
import Line from "../components/extra/Line";
import { useEffect } from "react";
import { actions } from "../global/slices/productsSlice";

const Single = () => {
  const { id } = useParams();
  const { single, singleSimilarProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(actions.setSingle(id));}, [id]);
  return (
    <div>
      <div
        id="single"
        className="row justify-content-center align-items-center text-white mx-auto"
      >
        <div className="col-md-6">
          <img
            src={require(`../images/${single.id}.jpg`)}
            alt=""
            className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold">{single.name}</h2>
          <div className="fs-5 mb-2">{single.price}</div>
          <p className="lead">{single.description}</p>
          <Productbtn product={single} />
        </div>
      </div>
      <Line />
      <Products Products={singleSimilarProducts} />
    </div>
  );
};

export default Single;
