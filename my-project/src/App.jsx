import { RouterProvider,createBrowserRouter} from 'react-router-dom';

import { About,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,Register,SingleProduct } from "./pages";

import { ErrorElement } from './components';

//loaders
import {loader as landingLoader} from './pages/Landing';
import {loader as signleProductLoader} from './pages/SingleProduct';
import {loader as productsLoader} from './pages/Products';
//actions
import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import { store } from './store'

store

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index : true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path:'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path:'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: signleProductLoader,
      },
      {
        path:'cart',
        element: <Cart />,
      },
      {
        path:'about',
        element: <About />,
      },
      {
        path:'checkout',
        element: <Checkout />,
      },
      {
        path:'orders',
        element: <Orders />,
      },
    ]
  },
  {
    path:'/login',
    element:<Login />,
    errorElement:<Error />,
    action: loginAction(store),
  },
  {
    path:'/register',
    element:<Register />,
    errorElement:<Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App