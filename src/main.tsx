import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {registerSW} from "virtual:pwa-register";


import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
)
if ("serviceWorker" in navigator) {
  registerSW()
}