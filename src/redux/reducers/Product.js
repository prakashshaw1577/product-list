const initialValue = {
  productList: [],
  serachProduct: [],
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
        serachProduct: [...state.productList, action.data],
      };

    case "REMOVE_PRODUCT":
      state.productList = state.productList.filter(
        (item) => item.id !== action.data.id
      );

      state.cart.filter((item, i) => {
        if (item.id === action.data.id) {
          state.cart.splice(i, 1);
          state.cartValue -= item.count;
          state.amount -= item.price;
        }
        return state.cart;
      });

      return {
        ...state,
      };

    // const currentCartData = state.cart.filter(
    //   (data) => data.id === action.data.id
    // );
    // const newProductList = state.productList.filter(
    //   (data) => data.id !== action.data.id
    //   );

    // const newCart = state.cart.filter((data) => data.id !== action.data.id);

    // let amountValue = state.amount;

    // if (state.amount > 0) {
    // amountValue = amountValue - parseInt(currentCartData[0].price);
    // }

    // let removeCart = state.cartValue;
    // if (state.cartValue > 0) {
    //   // removeCart = state.cartValue - currentCartData[0].count;
    //   removeCart = state.cartValue - currentCount;
    // }

    // return {
    //   ...state,
    // productList: newProductList,
    // cart: newCart,
    // cartValue: removeCart,
    // amount: amountValue,
    // };

    case "CART_PRODUCT":
      const { id, price } = action.cartdata;

      let isPresent = false;
      state.cart.filter((item, index) => {
        if (state.cart.length === 0) {
          return (isPresent = false);
        }
        if (item.id === id) {
          state.cart[index].count += 1;
          state.cart[index].price = item.count * item.defaultPrice;
          state.cartValue += 1;
          state.amount += price;
          isPresent = true;
        }
        return state.cart;
      });

      if (!isPresent) {
        state.cart.push(action.cartdata);
        state.cartValue += 1;
        state.amount += price;
      }

      return {
        ...state,
      };

    // const list = state.cart.filter((item) => item.id === id);
    // const newproductList = state.productList.filter((data) => data.id === id);

    // const newvalue = state.cart.filter((item) => item.id !== id);

    // let countValue = count;
    // if (list.length > 0) {
    //   countValue = list[0].count + 1;
    // } else {
    //   countValue = 1;
    // }

    // let newPrice = parseInt(price);
    // if (list.length > 0) {
    // newPrice = (list[0].count + 1) * parseInt(newproductList[0].price);
    // }

    // const arr = {
    //   ...action.cartdata,
    //   count: countValue,

    //   price: newPrice,
    // };

    // newvalue.push(arr);

    // const addCartValue = state.cartValue + 1;

    // return {
    //   ...state,
    // cart: newvalue,
    // cartValue: addCartValue,
    // amount: state.amount + parseInt(price),
    // };

    case "INCREMENT_CART":
      state.cart.filter((item, index) => {
        if (item.id === action.data.id) {
          state.cart[index].count = action.data.count + 1;
          state.cart[index].price = state.cart[index].price + item.defaultPrice;
          state.amount += item.defaultPrice;
          state.cartValue += 1;
        }
        return state.cart;
      });

      return {
        ...state,
      };

    // const newArr = state.productList.filter(
    //   (item) => item.id === action.data.id
    // );

    // const incNewvalue = state.cart.filter(
    //   (item) => item.id !== action.data.id
    // );

    // const incCountValue = Number(action.data.count + 1);
    // const incTotalAmountValue = Number(
    //   state.amount + parseInt(newArr[0].price)
    // );
    // const currentPrice =
    //   parseInt(action.data.price) + parseInt(newArr[0].price);

    // const arrlist = {
    //   ...action.data,
    //   count: incCountValue,
    //   price: currentPrice,
    // };

    // incNewvalue.push(arrlist);
    // const increaseCart = state.cartValue + 1;
    // return {
    //   ...state,
    // cart: incNewvalue,
    // amount: incTotalAmountValue,
    // cartValue: increaseCart,
    // };

    case "DECREMENT_CART":
      state.cart.filter((item, index) => {
        if (
          item.id === action.data.id &&
          state.cartValue > 1 &&
          item.count > 1
        ) {
          state.cart[index].count -= 1;
          state.cart[index].price -= item.defaultPrice;
          state.cartValue -= 1;
          state.amount -= item.defaultPrice;
        }
        return state.cart;
      });

      return {
        ...state,
      };

    // if (parseInt(action.data.price) === 0) {
    //   return state;
    // }
    // const newArrList = state.productList.filter(
    //   (item) => item.id === action.data.id
    // );

    // const localPrice = parseInt(newArrList[0].price);
    // const newTotalPrice = parseInt(action.data.price);

    // const decNewvalue = state.cart.filter(
    //   (item) => item.id !== action.data.id
    // );

    // const decCart = state.cart.filter((item) => item.id === action.data.id);

    // let decreaseCart = state.cartValue;
    // let decCountValue = action.data.count;
    // let decTotalAmountValue = state.amount;
    // let curtPrice = newTotalPrice;

    // if (state.cartValue > 1 && decCart[0].count > 1) {
    // decreaseCart = state.cartValue - 1;
    // decCountValue = action.data.count - 1;
    // decTotalAmountValue = state.amount - localPrice;
    // curtPrice -= localPrice;
    // }

    // const arrlists = {
    //   ...action.data,
    //   count: decCountValue,
    //   price: curtPrice,
    // };

    // decNewvalue.push(arrlists);
    // console.log(decNewvalue);

    // return {
    // ...state,
    // cart: decNewvalue,
    // amount: decTotalAmountValue,
    // cartValue: decreaseCart,
    // };

    case "SERACH_PRODUCT":
      let newSearchCart = [];

      state.productList.filter((item) => {
        if (item.product.includes(action.data)) {
          newSearchCart.push(item);
        }
        return newSearchCart;
      });

      if (action.data.length === 0) {
        newSearchCart = state.serachProduct;
      }
      return {
        ...state,
        productList: newSearchCart,
      };
    default:
      return state;
  }
};

export default Product;
