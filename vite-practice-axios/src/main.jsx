import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { store } from './Cart/store'
import { Provider } from 'react-redux'
import Products from "./Cart/products";
import AddToCart from "./Cart/AddToCart";
import Scrolling from "./assets/components/InfinteScrolling/Scrolling";
// import { APIWithoutUseMemo } from "./assets/components/search/FilteringData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <AddToCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
