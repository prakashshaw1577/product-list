export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    data,
  };
};

export const removeProduct = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    data,
  };
};

export const addToCart = (cartdata) => {
  return {
    type: "CART_PRODUCT",
    cartdata,
  };
};

export const incrementCartValue = (data) => {
  return {
    type: "INCREMENT_CART",
    data,
  };
};

export const decrementCartValue = (data) => {
  return {
    type: "DECREMENT_CART",
    data,
  };
};

export const searchProduct = (data) => {
  return {
    type: "SERACH_PRODUCT",
    data,
  };
};
