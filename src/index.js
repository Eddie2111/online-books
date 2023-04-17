import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pages import
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Logout from './views/Logout';

import AddBookRequest from './views/AddBookRequest';
import AddWishList from './views/AddWishList';
import BorrowRequest from './views/BorrowRequest';
import ExchangeRequest from './views/ExchangeRequest';

// component imports
import Navbar from './views/components/Navbar'

import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/logout",
        element: <Logout/>,
    },
    {
        path: "/addbookrequest",
        element: <AddBookRequest/>,
    },
    {
        path: "/addwishlist",
        element: <AddWishList/>,
    },
    {
        path: "/borrowrequest",
        element: <BorrowRequest/>,
    },
    {
        path: "/exchangerequest",
        element: <ExchangeRequest/>,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Navbar/>
    <RouterProvider router={router} />
  </ChakraProvider>
  
);
