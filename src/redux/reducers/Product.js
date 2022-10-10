const initialValue = {
  productList: [],
  cartList: [],
  amount: 0,
};

const Product = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        productList: [...state.productList, action.productData],
      };
    case "REMOVE_PRODUCT":
      const newProductList = state.productList.filter(
        (data) => data.id !== action.id
      );
      return {
        ...state,
        productList: newProductList,
      };

    case "CART_PRODUCT":
      const { count, id, name, product, price } = action.cartdata;
      const list = state.cartList.filter((item) => item.id === id);

      const newvalue = state.cartList.filter((item) => item.id !== id);
      const total = Number(list.length);
      console.log("okk", list);

      const arr = {
        count: list.length + count,
        id: id,
        name: name,
        product: product,
        price: price,
      };

      newvalue.push(arr);
      return {
        ...state,
        // cartList: [...state.cartList, action.cartdata],
        cartList: newvalue,
        amount: state.amount + parseInt(price),
      };
    default:
      return state;
  }
};

export default Product;
