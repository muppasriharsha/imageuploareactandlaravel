import { createStore } from "redux";
import reducer from "./redux.js";

const store = createStore(reducer);

export default store;
