import { createStore, combineReducers, compose } from 'redux'
import userReducer from './users'
import productReducer from './products'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    users: userReducer,
    products: productReducer,
}) 
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
