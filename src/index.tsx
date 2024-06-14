import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import './globals.css'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/store'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
