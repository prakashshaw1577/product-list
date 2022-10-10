export const addProduct = (productData) => {
  return {
    type: "ADD_PRODUCT",
    productData,
  };
};

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    id,
  };
};

export const addToCart = (cartdata) => {
  return {
    type: "CART_PRODUCT",
    cartdata,
  };
};
