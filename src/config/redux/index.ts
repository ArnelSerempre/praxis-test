import thunk from "redux-thunk";
import useReducers from "models/reducers";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {applyMiddleware, compose, createStore} from "@reduxjs/toolkit";

const useStore = () => {
    const initialState = {};
    let middleware = [thunk];
    const reducers = useReducers();
    const persistConfig = {
        key: "root",
        storage: storage,
        blacklist: []
    };

    const persistReduce = persistReducer(persistConfig, reducers);

    if(process.env.NODE_ENV === "development"){
        const inmutable = require('redux-immutable-state-invariant').default();
        middleware = [...middleware, inmutable];
    }

    const composerReducer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose();

    const store = createStore(
        persistReduce,
        initialState,
        composerReducer(applyMiddleware(...middleware))
    );

    // @ts-ignore
    const persistor = persistStore(store);

    return {
        store,
        persistor
    };
}

export default useStore;