import '@styles/globals.scss'

import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import exemple from '@reducers/exemple'

const reducers = combineReducers({ exemple })
const persistConfig = { key: 'nomdelakeylocalstorage', storage, blacklist: ['_persist'] }

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>Yours</title>
        <body className="yoursapp" />
      </Helmet>

      <Component {...pageProps} />
    </>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  )
}
