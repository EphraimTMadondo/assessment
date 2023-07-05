import React from 'react';
import ReactDOM from 'react-dom/client';
import CountriesRoute from './pages/Countries';
import CountryRoute from './pages/Country';
import LoginRoute from './pages/Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/countries/:countryId",
    element: <CountryRoute />,
  },
  {
    path: "/countries",
    element: <CountriesRoute />,
  },
  {
    path: "/",
    element: <LoginRoute />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
