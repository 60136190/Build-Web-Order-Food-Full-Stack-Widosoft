import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
import ProductReducer from "./Reducer/ReducerProduct";
import ProductReducer from "./Reducer/ReducerInfoAllUser";
const rootReducer = combineReducers({
  authAdmin: AuthReducer,
  products: ProductReducer,
  info: ReducerInfoAllUser,
});
export default rootReducer;
