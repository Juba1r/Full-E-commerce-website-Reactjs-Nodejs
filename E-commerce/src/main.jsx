import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/Components/Redux/Store';
import App from './App';
import './index.css'
import ShopContextProvider from './Context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
    <Provider store={store}>
    <App />
  </Provider>
  </ShopContextProvider>
     
  </React.StrictMode>,
)
