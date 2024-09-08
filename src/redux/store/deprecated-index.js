import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducers from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initializeState) {
    const persistConfig = {
        key: "root",
        storage: AsyncStorage,
        blacklist: ["modals"],
    };

    const persistedReducer = persistReducer(persistConfig, reducers);
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
        // applyMiddleware(sagaMiddleware)
        // composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}