import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import { store } from './Redux/store';
import CartContextProvider from './Components/Context/CartContext';
import AuthContextProvider from './Components/Context/Authcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartContextProvider>
  <ChakraProvider>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </ChakraProvider>
  </CartContextProvider>
  </AuthContextProvider>

);
