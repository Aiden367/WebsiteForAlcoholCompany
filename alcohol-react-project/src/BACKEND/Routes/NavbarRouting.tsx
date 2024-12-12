import * as ReactDOM from 'react-dom/client';  // Correct import syntax
import { RouteObject } from 'react-router-dom';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from '@frontend/Pages/Home';
import React from 'react'
import { Link } from 'react-router-dom';
const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    },

];

const router = createBrowserRouter(routes);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);