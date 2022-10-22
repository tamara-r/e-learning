import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isExists = state.cartItems.find((i) => i.product === item.product);
      if (isExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isExists.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
};
