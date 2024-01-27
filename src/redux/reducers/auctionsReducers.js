import { 
    ADD_AUCTION_SUCCESS, 
    CLEAR_SEARCH_STATE, 
    GET_RECENT_AUCTIONS_SUCCESS,
    REMOVE_AUCTION_SUCCESS,
    SEARCH_AUCTIONS_SUCCESS,
    UPDATE_AUCTION_SUCCESS,
} from "../../constants/constants";



const auctionsReducer = (state ={
    lastRefKey: null,
    total: 0,
    auctionItems: [],
    searchedAuctions: [],
     
}, action) => {
    switch(action.type){
        case GET_RECENT_AUCTIONS_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                auctionItems: [...state.auctionItems, ...action.payload.auctions]
            };
        // case GET_RELATED_AUCTIONS_SUCCESS:
        //     return {
        //         ...state,
        //         relatedProducts: action.payload.products
        //     };
      
        case ADD_AUCTION_SUCCESS:
            return {
                ...state,
                auctionItems: [...state.auctionItems, action.payload]
            };
        
        case SEARCH_AUCTIONS_SUCCESS:
            let {products, lastKey, total} = action.payload;
            return {
                ...state,
                searchedAuctions: {
                    lastRefKey: lastKey,
                    total: total,
                    auctionItems: products
                }
            }
      
        case CLEAR_SEARCH_STATE:
            return {
                ...state,
                searchedAuctions: []
            }
        
        case REMOVE_AUCTION_SUCCESS:
            return {
                ...state,
                item: state.auctionItems.filter((product) => product.id !== action.payload)
            }

        case UPDATE_AUCTION_SUCCESS:
            return {
                ...state,
                auctionItems: state.auctionItems.map((product) => {
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

export default auctionsReducer;