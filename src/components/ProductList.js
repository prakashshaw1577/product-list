import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, addToCart } from "../redux/actions/Index";
import { searchProduct } from "../redux/actions/Index";

const ProductList = () => {
  // const [list, setList] = useState([]);
  const productData = useSelector((state) => state.Product.productList);
  // const searchProductList = useSelector((state) => state.Product.serachProduct);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th className="text-center" style={{ width: "20%" }}>
              <input
                className="form-control"
                type="text"
                placeholder="Product Search"
                onChange={(e) => {
                  dispatch(searchProduct(e.target.value));
                }}
              />
            </th>
            <th>Price</th>
            <th>Add To Cart</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td className="text-center">{data.product}</td>
                <td>{data.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      const cartdata = {
                        count: 1,
                        id: data.id,
                        name: data.name,
                        product: data.product,
                        price: parseInt(data.price),
                        defaultPrice: parseInt(data.price),
                      };
                      dispatch(addToCart(cartdata));
                    }}
                  >
                    cart add
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(removeProduct(data))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
