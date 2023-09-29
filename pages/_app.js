import '@styles/globals.scss'

import { useEffect } from 'react'
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
  useEffect(() => {
    document.title = 'Titre de ma page'
    document.body.classList.add('nomdelaclassapp')

    return
  }, [])

  return <Component {...pageProps} />
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
