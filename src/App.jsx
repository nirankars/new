//Redux Imports
import { persistStore } from "redux-persist";
import crossBrowserListener from "./utilities/redux-persist-listner";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./state/store";

import { CookiesProvider } from "react-cookie";
import AppRouter from './routes';
import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  
  const persistConfig = {
    key: "root",
    storage,
    stateReconciler: hardSet,
  };
  const persistor = persistStore(store);
  store.persistor = persistor;

  window.addEventListener(
    "storage",
    crossBrowserListener(store, persistConfig)
  );


  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-screen text-2xl bg-white dark:bg-black dark:text-white">
            <span className="loader"></span>
          </div>
        }
        persistor={persistor}
      >
        <CookiesProvider>
          <AppRouter />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;