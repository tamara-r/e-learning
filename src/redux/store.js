import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './reducers/productReducers';
import { cartReducer, soldReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  sold: soldReducer
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  sold: {
    soldItems: localStorage.getItem('soldItems')
      ? JSON.parse(localStorage.getItem('soldItems'))
      : [],
  }
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
