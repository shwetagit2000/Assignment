import changeTheNum from "./upDown";
import AddTo from "./Adding";
import { combineReducers } from "redux";
import productData from "./ProductReducer";

const rootReducer = combineReducers({
  changeTheNum: changeTheNum,
  AddTo: AddTo,
  ProductData:productData
});

export default rootReducer;
