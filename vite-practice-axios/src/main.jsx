import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JsonList from "./assets/components/Front-end-App/JsonList";
import CartList from "./assets/components/Front-end-App/CartList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JsonList />,
  },
  {
    path: "/cart",
    element: <CartList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
