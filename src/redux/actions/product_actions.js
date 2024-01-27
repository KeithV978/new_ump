import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  CANCEL_GET_PRODUCTS,
  CLEAR_SEARCH_STATE,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  GET_RECENT_PRODUCTS,
  GET_RECENT_PRODUCTS_SUCCESS,
  GET_SELLERS_PRODUCTS,
  GET_SELLERS_PRODUCTS_SUCCESS,
  GET_RELETATED_PRODUCTS,
  GET_RELETATED_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  CLEAR_SELLERS_PRODUCT_STATE,
  ADD_BID,
  ADD_BID_SUCCESS,
  DELETE_BID,
  DELETE_BID_SUCCESS,
} from "../../constants/constants";

export const getRecentProducts = () => {
  return {
    type: GET_RECENT_PRODUCTS,
  };
};

export const getRecentProductSuccess = (products) => ({
    type: GET_RECENT_PRODUCTS_SUCCESS,
    payload: products,
  });

export const getRelatedProducts = () => ({
    type: GET_RELETATED_PRODUCTS
  })

export const getRelatedProductsSuccess = (products) => {
  return {
    type: GET_RELETATED_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const getSellersProducts = (id, lastKeyRef) => {
  return {
    type: GET_SELLERS_PRODUCTS,
    payload: {
      id,
      lastKeyRef: lastKeyRef || 0,
    },
  };
};


export const getSellersProductsSuccess = (products, lastKeyRef) => {
  return {
    type: GET_SELLERS_PRODUCTS_SUCCESS,
    payload: {
        products,
        lastKeyRef
    }
  };
};

export const cancelGetProduct = () => {
  return {
    type: CANCEL_GET_PRODUCTS,
  };
};

export const addProduct = (product, imageCollection, category) => ({
  type: ADD_PRODUCT,
  payload: {
    product,
    imageCollection,
    category,
  }
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});
export const searchProduct = (searchKey, category) => {
  return {
    type: SEARCH_PRODUCT,
    payload: {
      searchKey,
      category
    },
  };
};

export const searchProductSuccess = (products) => {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE,
});

export const clearSellersProductState = () => ({
  type: CLEAR_SELLERS_PRODUCT_STATE,
});
export const removeProduct = (id, category) => ({
  type: REMOVE_PRODUCT,
  payload: {
    id,
    category
}
});

export const removeProductSuccess = (id) => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: id,
});

export const editProduct = (id, category, updates) => ({
  type: EDIT_PRODUCT,
  payload: {
    id,
    category,
    updates,
  },
});

export const editProductSuccess = (updates) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: updates,
});

export const addBid = (productId, bid) => ({
  type: ADD_BID,
  payload: {
    productId,
    bid
  }
})

export const addBidSuccess = (bid) => ({
  type: ADD_BID_SUCCESS,
  payload: bid
})

export const deleteBid = (productId,) => ({
  type: DELETE_BID,
  payload: productId
})

export const deleteBidSuccess = (id) => ({
  type: DELETE_BID_SUCCESS,
  payload: id
})
