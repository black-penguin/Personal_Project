import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import choose from "./ducks/chooseImage";

export default createStore( choose, undefined, applyMiddleware(promiseMiddleware()) );
