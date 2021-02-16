import * as actionTypes from "../actions/actionTypes";
import * as images from "../../images";

const initialState = {
  products: [],
  price: 0,
  purchasedProducts: [],
};

const finder = (state, action) => {
  const product = state.purchasedProducts.find((p, i) => {
    return true ? p.name === action.productName : false;
  });
  return product;
};

const initializeBasket = (action) => {
  const arrayPurchasedProducts = [];
  for (let el in action.products) {
    let p = { ...action.products[el] };
    p.number = 0;
    arrayPurchasedProducts.push(p);
  }
  return arrayPurchasedProducts;
};

const updateObjectInArray = (state, array, action) => {
  const updatedProduct = finder(state, action);
  if (action.type === actionTypes.ADD_PRODUCT) {
    updatedProduct.number += 1;
  } else if (action.type === actionTypes.REMOVE_PRODUCT) {
    updatedProduct.number -= 1;
  }
  const updatedPurchasedProducts = array.map((item) => {
    if (item.name !== updatedProduct.name) {
      return item;
    }
    return {
      ...updatedProduct,
    };
  });
  return updatedPurchasedProducts;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PURCHASED_PRODUCTS:
      return {
        ...state,
        purchasedProducts: [...initializeBasket(action)],
      };
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        price: state.price + finder(state, action).price,
        purchasedProducts: updateObjectInArray(
          state,
          state.purchasedProducts,
          action
        ),
      };
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        price: state.price - finder(state, action).price,
        purchasedProducts: updateObjectInArray(
          state,
          state.purchasedProducts,
          action
        ),
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
        price: 0,
        //Have to set error false here
      };
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        //Have to add error and set it true here
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
