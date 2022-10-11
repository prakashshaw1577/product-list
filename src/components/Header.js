import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.Product.cartValue);
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar bg-light"
        style={{
          display: "flex",
          justifyContent: "right",
          paddingRight: "20px",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => navigate("/cartproduct")}
        >{`Cart ${cart}`}</button>
      </nav>
    </div>
  );
};

export default Header;
