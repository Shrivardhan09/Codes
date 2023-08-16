import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { store } from './Cart/store'
import { Provider } from 'react-redux'
import Products from "./Cart/products";
import AddToCart from "./Cart/AddToCart";
import Scrolling from "./assets/components/InfinteScrolling/Scrolling";
import TaskJson from "./assets/components/Context.jsx/TaskJson";
import TaskDetails from "./assets/components/Context.jsx/TaskDetails";
import { TaskJsonProvider } from "./assets/components/Context.jsx/PassJson";
import HomePage from "./assets/components/Context.jsx/HomePage";
import { ThemeProvider } from "./assets/components/Context.jsx/Setup";
import Task from "./assets/components/EveningTask/Task";
import { MemoData } from "./assets/components/ManasCart/MemoData";
import ParentMans from "./assets/components/ManasCart/ParentMans";
import ChildManas from "./assets/components/ManasCart/ChildManas";
import Todo from "./assets/components/todo/Todo";
import ListData from "./assets/ListRender/ListData";
import ListData1 from "./assets/ListRender/AnkitCode";
import { APIWithUseMemo } from "./assets/components/search/FilteringData";
import Pagination from "./assets/components/Pagination/Pagination";
import AlterantePagination from "./assets/components/Pagination/AlterantePagination";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AlterantePagination />,
  },
  {
    path: "/:id",
    element: <ChildManas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  // </Provider>
  // <TaskJsonContext>
  //   <RouterProvider router={router} />
  // </TaskJsonContext>
  // <TaskJsonProvider>
  //   <RouterProvider router={router} />
  // </TaskJsonProvider>
  // <ThemeProvider>
  //   <RouterProvider router={router} />
  // </ThemeProvider>
  // <MemoData>
  //   <RouterProvider router={router} />
  // </MemoData>
  <>
    <RouterProvider router={router} />
  </>
);
