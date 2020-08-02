import React from 'react';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { taskDetailsReducer } from "features/task-details";

const rootReducer = combineReducers({
    taskDetails: taskDetailsReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export {
    StoreProvider,
}