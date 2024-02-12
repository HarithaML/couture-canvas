import {combineReducers} from "redux";
import {UserReducer} from "./user/UserReducer";
import {CategoryReducer} from "./category/CategoryReducer";
import {CartReducer} from "./cart/CartReducer";

export const RootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    cart: CartReducer,
})