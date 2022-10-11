import React from "react";
import { useDispatch } from "react-redux";
import { incrementCartValue, decrementCartValue } from "../redux/actions/Index";

const CartValue = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(decrementCartValue(props.data));
        }}
      >
        -
      </button>{" "}
      {props.data.count}{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch(incrementCartValue(props.data))}
      >
        +
      </button>
    </div>
  );
};

export default CartValue;
