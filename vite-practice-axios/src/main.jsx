import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Search from "./assets/components/routing.jsx/Search";
import TaskDetails from "./assets/components/Context.jsx/TaskDetails";
import FormComponent from "./assets/components/FastTrack/FixingCode";
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import { Calculator } from "./features/Calculator";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FormComponent />,
//   },
//   {
//     path: "/:id",
//     element: <TaskDetails />,
//   },
//   {
//     path: "/search",
//     element: <Search />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  < Provider store={store} >
    <Calculator />
  </Provider >
);
