import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCT_UPDATE,
  PRODUCT_CREATE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCH:
    case PRODUCT_FETCH:
      return action.payload;

    case PRODUCT_CREATE:
      return { saved: true, msg: "Product record successful" };

    case PRODUCT_UPDATE:
      return { ...state, saved: true, msg: "Product record successful" };

    default:
      return state;
  }
}
