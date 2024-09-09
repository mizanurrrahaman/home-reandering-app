import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import {userReducer} from " ./slice/userSlice";
import userReducer from "./slice/userSlice"
import listingReducer from "./slice/listingSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { version } from "react";


// login authentication  start
const rootReducer = combineReducers({
     user: userReducer,
     listings: listingReducer,
})

const persistConfig = {
    key: "root",
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

{/*

    import { configureStore } from "@reduxjs/toolkit";
    import userReducer from "./slice/userSlice"
    
    
    
    export const store = configureStore({
        reducer: {
            user: userReducer,
        },
    
        middleware: (getDefaultMiddleware)=>
            getDefaultMiddleware({
                serializableCheck: false
            })
    })
*/}