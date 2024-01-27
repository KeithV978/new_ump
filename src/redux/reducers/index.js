import authReducer from './authReducer'
import filterReducer from './filterReducer'
import miscReducer from './miscReducer'
import productReducer from './productsReducer'
import profileReducer from './profileReducer' 


const rootReducer = {
    products: productReducer, 
    auth: authReducer,
    profile: profileReducer,
    filter: filterReducer,    
    app: miscReducer
};

export default rootReducer;