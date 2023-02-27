import { combineReducers } from "redux";
import specReducer from "./specialization/Reducer";
import authReducer from "./auth/authReducer";

export default combineReducers({
  specData: specReducer,
  auth: authReducer,
});
