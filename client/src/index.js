import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './routes/ErrorPage'
import ProductUpload from './components/ProductUpload';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductCatalog from './components/ProductCatalog';
import UserSkinGoal from './components/UserSkinGoal';
import UserRegime from './components/UserRegime';
import { CookiesProvider } from 'react-cookie';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement:<ErrorPage />
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path:'/adminupload',
    element:<ProductUpload/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/products',
    element:<ProductCatalog/>
  },
  {
    path:'/skingoal',
    element:<UserSkinGoal/>
  },
  {
    path:'/userregime',
    element:<UserRegime/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App/>
  //   </BrowserRouter>
  // </React.StrictMode>
  <CookiesProvider>
    <RouterProvider router={router} />
  </CookiesProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
