const initialValue = {
  productList: [],
  cartList: [],
  cart: [],
  cartValue: 0,
  amount: 0,
};

const Product = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        productList: [...state.productList, action.data],
      };

    case "REMOVE_PRODUCT":
      const newAmount = state.cart.filter((data) => data.id === action.data.id);
      const newProductList = state.productList.filter(
        (data) => data.id !== action.data.id
      );

      const newCartList = state.cartList.filter(
        (data) => data.id !== action.data.id
      );

      const newCart = state.cart.filter((data) => data.id !== action.data.id);

      // console.log(state.cartValue, "oooo", newAmount[0].count);

      let amountValue = state.amount;
      if (amountValue > 0) {
        amountValue = Number(
          state.amount - newAmount[0].count * newAmount[0].price
        );
      }
      let removeCart = state.cartValue > 0 && state.amount - newAmount[0].count;

      return {
        ...state,
        productList: newProductList,
        cartList: newCartList,
        cart: newCart,
        cartValue: removeCart,
        amount: amountValue,
      };

    case "CART_PRODUCT":
      const { count, id, price } = action.cartdata;

      const list = state.cart.filter((item) => item.id === id);

      const newvalue = state.cart.filter((item) => item.id !== id);

      let countValue = count;
      if (list.length > 0) {
        countValue = list[0].count + 1;
      } else {
        countValue = 1;
      }

      const newproductList = state.productList.filter((data) => data.id === id);

      let newPrice = parseInt(price);
      if (list.length > 0) {
        newPrice = (list[0].count + 1) * parseInt(newproductList[0].price);
      }

      const arr = {
        ...action.cartdata,
        count: countValue,

        price: newPrice,
      };

      newvalue.push(arr);

      const addCartValue = state.cartValue + 1;

      return {
        ...state,
        cart: newvalue,
        cartValue: addCartValue,
        amount: state.amount + parseInt(price),
      };

    case "INCREMENT_CART":
      const newArr = state.productList.filter(
        (item) => item.id === action.data.id
      );

      const incNewvalue = state.cart.filter(
        (item) => item.id !== action.data.id
      );
      const incCountValue = Number(action.data.count + 1);
      const incTotalAmountValue = Number(
        state.amount + parseInt(newArr[0].price)
      );
      const currentPrice =
        parseInt(action.data.price) + parseInt(newArr[0].price);

      const arrlist = {
        ...action.data,
        count: incCountValue,
        price: currentPrice,
      };

      incNewvalue.push(arrlist);
      console.log(incNewvalue);
      const increaseCart = state.cartValue + 1;
      return {
        ...state,
        cart: incNewvalue,
        amount: incTotalAmountValue,
        cartValue: increaseCart,
      };

    case "DECREMENT_CART":
      if (parseInt(action.data.price) === 0) {
        return state;
      }
      const newArrList = state.productList.filter(
        (item) => item.id === action.data.id
      );

      const localPrice = parseInt(newArrList[0].price);
      const newTotalPrice = parseInt(action.data.price);

      const decNewvalue = state.cart.filter(
        (item) => item.id !== action.data.id
      );
      const decCountValue = Number(
        action.data.count > 0 && action.data.count - 1
      );
      const decTotalAmountValue = Number(
        state.amount > 0 && state.amount - localPrice
      );
      let curtPrice = newTotalPrice;
      if (newTotalPrice > 0) {
        curtPrice -= localPrice;
      }

      const arrlists = {
        ...action.data,
        count: decCountValue,
        price: curtPrice,
      };

      decNewvalue.push(arrlists);
      console.log(decNewvalue);
      const decreaseCart = state.cartValue - 1;
      return {
        ...state,
        cart: decNewvalue,
        amount: decTotalAmountValue,
        cartValue: decreaseCart,
      };
    default:
      return state;
  }
};

export default Product;
