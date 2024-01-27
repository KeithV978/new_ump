import { ADD_PRODUCT } from "../../constants/constants";

const initialState = {
  category: "",
  title: "",
  price: "",
  mode: "",
  views: "",
  reactions: "",
  phone: "",
  author: "",
  imageUrl: [],
  mostSearchedKeywords: [],
  dateAdded: new Date(),
  trending: [],
  searched: [],
  recentlyAdded: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
