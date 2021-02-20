import * as actionTypes from "./actionTypes";
import * as images from "../../images";
import axios from "axios";

// Adding product to basket
export const addProduct = (name) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    productName: name,
  };
};

// Removing product from the basket
export const removeProduct = (name) => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    productName: name,
  };
};

// Setting the array of purchased products
export const initPurchasedProducts = (products) => {
  return {
    type: actionTypes.INIT_PURCHASED_PRODUCTS,
    products: products,
  };
};

//Setting products gotten from the server to state
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

// Can't get products from the server
export const fetchProductsFailed = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
  };
};

//Reaching out the web to get all product types we have
export const initProducts = () => {
  return (dispatch) => {
    axios
      .get("https://maxway-e7045-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        const products = Object.values(response.data);
        for (let key in products) {
          // Removing - and spaces from names
          const imgSrc = products[key].name
            .replace(/\s+/g, "")
            .replace("-", "");
          console.log(imgSrc);
          products[key] = {
            ...products[key],
            imgSrc: images[imgSrc],
          };
        }
        dispatch(setProducts(products)); // Setting gotten products to our state
        dispatch(initPurchasedProducts(products));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductsFailed()); // When we can't get products
      });
  };
};
