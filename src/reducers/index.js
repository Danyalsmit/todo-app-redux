import {inputReducer} from "./todos";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    
    inputReducer,
});
export default rootReducer;
