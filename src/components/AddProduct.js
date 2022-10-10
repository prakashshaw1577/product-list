import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addProduct } from "../redux/actions/Index";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const _id = uuid();

  const submitHandler = (e) => {
    e.preventDefault();

    const productData = {
      id: _id,
      name: name,
      product: product,
      price: price,
    };

    dispatch(addProduct(productData));
    setName("");
    setProduct("");
    setPrice("");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={submitHandler}>
        <div className="row">
          <input
            className="form-control col"
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control col"
            type="text"
            required
            placeholder="Product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <input
            className="form-control col"
            type="number"
            required
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn btn-primary col" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
