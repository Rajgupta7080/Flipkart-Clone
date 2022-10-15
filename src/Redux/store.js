import reducer from "./Products/reducer";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

const functionOrObject = (store) => (next) => (action) => {
    if (typeof action === "function") {
        console.log(1);
        return action(store.dispatch);
    }
    return next(action);
};


const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const middlewares = applyMiddleware(thunk);
const enhancer = composeEnhancers(middlewares);


export const store = createStore(reducer, enhancer);

// store.subscribe(() => {
//   console.log("store got updated", store.getState().products);
// });
