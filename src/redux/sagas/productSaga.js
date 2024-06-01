import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    GET_RECENT_PRODUCTS,
    GET_SELLERS_PRODUCTS,
    GET_RELETATED_PRODUCTS,
    REMOVE_PRODUCT,
    SEARCH_PRODUCT,
    ADD_BID,
    DELETE_BID
} from '../../constants/constants'
import { SELLER_PRODUCTS } from '../../constants/routes'
import { DisplayActionMessage } from '../../helpers/utils'
import { all, call, put, select } from 'redux-saga/effects'
import {setLoading, setRequestStatus} from '../actions/misc_actions'
import { history } from '../../routers'
import firebase from '../../services/firebase'
import {
    addProductSuccess,
    addBidSuccess,
    clearSearchState,
    clearSellersProductState,
    editProductSuccess,
    getRecentProductSuccess,
    // getRelatedProductsSuccess,
    getSellersProductsSuccess,
    removeProductSuccess,
    searchProductSuccess
} from '../actions/product_actions'


function* initRequest() {
    yield put(setLoading(true));
    yield put(setRequestStatus(null));
}

function* handleError(error){
    yield put(setLoading(false));
    yield put(setRequestStatus(error?.message || 'Failed to fetch products'));
    console.log('ERROR: ', error);
}

function* handleAction(location, message, status){
    if(location) yield call(history.push, location);
    yield call(DisplayActionMessage, message, status);
}

function* productSaga({ type, payload }){
    switch(type){
        case GET_RECENT_PRODUCTS:
            try{
                yield initRequest();
                const state = yield select();
                const result = yield call(firebase.getRecentlyAddedProducts, payload)

                if(result.products.length === 0){
                    handleError('No Products found')
                } else{
                    yield put(getRecentProductSuccess({
                        products: result.products,
                        lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
                        total: result.total ? result.total : state.products.total
                    }));
                    yield put(setRequestStatus(''));
                }
                yield put(setLoading(false));
            } catch(error){
                console.log(error)
                yield handleError(error)
            }
            break;
            
            case GET_RELETATED_PRODUCTS:
                try {
                    yield initRequest();
                    // const state = yield select();
                    // const result = yield call(firebase.getRelatedProducts, payload)

                    yield put(setLoading(false));
                }catch(error){
                    yield handleError(error)
                }

            break;
            case GET_SELLERS_PRODUCTS: 
                try {
                    yield initRequest(); 
                    yield put(clearSellersProductState())

                    // return console.log("saga 1")

                    const state = yield select();
                    const result = yield call(firebase.getSellersProducts, payload.id, payload.lastKeyRef)
                
                    console.log(result)
                    if(result.products.length === 0){
                        handleError({message: 'No Products found.'})
                        yield put(clearSellersProductState())
                    } else {

                        // console.log("success")

                        yield put(getSellersProductsSuccess({
                            products: result.products,
                            lastKey: result.lastKey ? result.lastKey : state.products.sellersProducts.lastKeyRef,
                            total: result.total ? result.total : state.products.sellersProducts.total
                        }))
                        yield put(setRequestStatus(''))
                    }
                    yield put(setLoading(false))
                } catch(error){
                    console.log(error)
                    yield handleError(error)
                }
            break;

            case ADD_PRODUCT: {
                try {
                    yield initRequest();
                    const {imageCollection, product, category } = payload;

                    const key = yield call(firebase.generateKey)
                    let images = [];

                    if(imageCollection.length !== 0){
                        const imageKeys = yield all(imageCollection.map(() => firebase.generateKey));
                        const imageUrls = yield all(imageCollection.map((img, i) => firebase.storeImage(imageKeys[i](), 'productsImages', img.file)));

                        console.log(imageKeys)
                        console.log(imageUrls)
                        images = imageUrls.map((url, i) => ({
                            id: imageKeys[i](),
                            url
                        }))
                    }
                    const productItem = {
                        product,  
                        imageUrls: [...images]
                    };

                    yield call(firebase.addProduct, key, category, productItem);
                    yield put(addProductSuccess({
                        id: key,
                        ...productItem
                    }));
                    yield handleAction(SELLER_PRODUCTS, 'Product successfully added', 'success')
                    yield put(setLoading(false));
                } catch(error){
                    yield handleError(error);
                    yield handleAction(undefined, `The Product could not be added: ${error?.message}`, 'error');
                }
                break;
            }
            case EDIT_PRODUCT: {
                try{
                    yield initRequest();

                    const { image, imageCollection } = payload.updates
                    let newUpdates = {...payload.updates};

                    if(image.constructor === File && typeof image === 'object'){
                        try {
                            yield call(firebase.deleteImage, payload.id)
                        } catch(error){
                            console.error("Failed to delete image ", error)
                        }

                        const url = yield call(firebase.storeImage, payload.id, 'productsImages', image);
                        newUpdates = { ...newUpdates, image: url}
                    }

                    if(imageCollection.length > 1) {
                        const existingUploads = [];
                        const newUploads = [];

                        imageCollection.forEach((img) => {
                            if(img.file){
                                newUploads.push(img);
                            } else {
                                existingUploads.push(img)
                            }
                        });;

                        const imageKeys = yield all(newUploads.map(() => firebase.generateKey));
                        const imageUrls = yield all(newUploads.map((img, i) => firebase.storeImage(imageKeys[i](), 'productsImages', img.file)))
                        const images = imageUrls.map((url, i) => ({
                            id: imageKeys[i](),
                            url
                        }))
                        newUpdates = { ...newUpdates, imageCollection: [...existingUploads, ...images]}
                    } else {
                        newUpdates = {
                            ...newUpdates,
                            imageCollection: [{ id: new Date().getTime(), url: newUpdates.image }]
                        }
                    }
                    yield call(firebase.editProduct, payload.id, payload.category, newUpdates)
                    yield put(editProductSuccess({
                        id: payload.id,
                        updates: newUpdates
                    }));
                    yield handleAction(SELLER_PRODUCTS, 'Product updated successfully', 'success')
                    yield put(setLoading(false));
                }catch(error){
                    yield handleError(error)
                    yield handleAction(undefined, `Update failed: ${error.message}`, 'error');
                }
                break;
            }
                case REMOVE_PRODUCT: {
                    try {
                        yield initRequest();
                        yield call(firebase.removeProduct, payload)
                        yield put(removeProductSuccess(payload))
                        yield put(setLoading(false))
                        yield handleAction(SELLER_PRODUCTS, `The product was successfully deleted`, 'success')
                    } catch(error){
                        yield handleError(error)
                        yield handleAction(undefined, `The product could not be deleted: ${error.message}`, 'error');
                    }
                break;
                }

                case SEARCH_PRODUCT: {
                    try {
                        yield initRequest();
                        yield put(clearSearchState())

                        const state = yield select();
                        const result = yield call(firebase.searchProducts, payload.searchKey)

                        if(result.products.length === 0) {
                            yield handleError({ message: 'No products found.'});
                            yield put(clearSearchState())
                        }else { 
                            yield put(searchProductSuccess({
                                products: result.products,
                                lastKey: result.lastKey ? result.lastKey : state.products.searchedProducts.lastRefKey,
                                total: result.total ? result.total : state.products.searchedProducts.total
                            }))
                            yield put(setRequestStatus(''));
                        }
                        yield put(setLoading(false))
                    } catch(error){
                        yield handleError(error);
                    }
                break;
                }
            case ADD_BID: {
                try{
                    yield initRequest();


                    addBidSuccess()
                }catch(error){

                }
                break;
            }
            case DELETE_BID: {
                try{
                    yield initRequest();

                }catch(error){

                }
                break;
            }
            default: {
                throw new Error(`Unexpected action type ${type}`);
              }
    }
}

export default productSaga;