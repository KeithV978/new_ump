import {
    ADD_PRODUCT_SUCCESS,
    ADD_BID_SUCCESS,
    CLEAR_SEARCH_STATE,
    EDIT_PRODUCT_SUCCESS,
    GET_RECENT_PRODUCTS_SUCCESS,
    GET_SELLERS_PRODUCTS_SUCCESS,
    GET_RELETATED_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_SUCCESS,
    CLEAR_SELLERS_PRODUCT_STATE,
    DELETE_BID_SUCCESS,
} from '../../constants/constants'
 

const productReducer = (state ={
    lastRefKey: null,
    total: 0,
    items: [],
    searchedProducts: [],
    sellersProducts: [],
    swappingProducts: [],
    sellingProducts: [],
    auctioningProduct: [],
    recommendedProducts: [],
    recentlyAddedProducts: [],
}, action) => {
    switch(action.type){
        case GET_RECENT_PRODUCTS_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                items: [...state.items, ...action.payload.products]
            };
        case GET_RELETATED_PRODUCTS_SUCCESS:
            return {
                ...state,
                relatedProducts: action.payload.products
            };
        case GET_SELLERS_PRODUCTS_SUCCESS:
            return {
                ...state,
                sellersProducts: {   
                    total: action.payload.total,
                    lastRefKey: action.payload.lastKey,
                    items: action.payload.products
                }
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case ADD_BID_SUCCESS:
            return{
                ...state,
                items: [...state.items, action.payload]
            }
        
        case SEARCH_PRODUCT_SUCCESS:
            let {products, lastKey, total} = action.payload;
            return {
                ...state,
                searchedProducts: {
                    lastRefKey: lastKey,
                    total: total,
                    items: products
                }
            }
      
        case CLEAR_SEARCH_STATE:
            return {
                ...state,
                searchedProducts: []
            }
        case CLEAR_SELLERS_PRODUCT_STATE:
            return {
                ...state,
                sellersProducts: []
            }
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                item: state.items.filter((product) => product.id !== action.payload)
            }
        case DELETE_BID_SUCCESS:
            return{
                ...state,
                item: state.items.filter((product) => product.id !== action.payload)
            }

        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                items: state.items.map((product) => {
                    if(product.id === action.payload.id){
                        return {
                            ...product,
                            ...action.payload.updates
                        }
                    }
                    return product;
                })
            }
            default: 
                return state;
    }
}

export default productReducer;