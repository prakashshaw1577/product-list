import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementCartValue, decrementCartValue } from "../redux/actions/Index";

const CartProduct = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Product.cart);
  const cartList = useSelector((state) => state.Product.cartValue);
  const amount = useSelector((state) => state.Product.amount);
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar bg-light mt-5"
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingRight: "20px",
        }}
      >
        <button className="btn btn-primary">Cart = {cartList}</button>
        <button className="btn btn-primary">Total Amount = {amount}</button>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back
        </button>
      </nav>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.product}</td>
                  <td>{data.price}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(decrementCartValue(data));
                      }}
                    >
                      -
                    </button>{" "}
                    {data.count}{" "}
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(incrementCartValue(data))}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProduct;
