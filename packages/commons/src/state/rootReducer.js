import {combineReducers} from "redux";
import {userReducres} from "./User";
const reducer = combineReducers( {
  workOrder: userReducres,
} );

export default reducer;
