import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ChildManas from "./assets/components/ManasCart/ChildManas";
// import AlterantePagination from "./assets/components/Pagination/AlterantePagination";
// import ErrorBoundaries from "./assets/components/ErrorBoundaries/HigherOrderC";
// import Theme from "./assets/ContextTaskVSS/Theme";
// import { ContextHoc } from "./assets/ContextTaskVSS/ContextHoc";
// import { LanguageContext } from "./assets/ContextTaskVSS/LanguageContext";
// import ParentRef from "./assets/ForwardRefVSS/ParentRef";
import Books from "./assets/components/BooksTask";
// import ToAndFro from "./assets/components/ToAndFro";
import NumberAnimation from "./assets/components/ToAndFro/Alternate";
import Alternate from "./assets/components/ToAndFro/Alternate";
import ChatTask from "./assets/components/ChatTask/ChatTask";
import TodoEveningTask from "./assets/components/ManasTask";
import Optimise from "./assets/components/ManasTask/Optimise";
import ImageBW from "./assets/components/Iamge";
import TodoManas from "./assets/components/TodoList/TodoManas";
import ParentTable from "./assets/components/Table/ParentTable";


export function RootErrorBoundary() {
  let error = useRouteError();
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AlterantePagination />,
//     errorElement: <RootErrorBoundary />
//   },
//   {
//     path: "/:id",
//     element: <ChildManas />,
//     errorElement: <RootErrorBoundary />

//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Books />,
    // element: <ChatTask />,
    // element: <TodoEveningTask />,
    // element: <ImageBW />,
    element: <ParentTable />,
    // element: <Optimise />,
    // element: <Alternate />,
    errorElement: <RootErrorBoundary />
  },
  {
    path: "/:id",
    element: <ChildManas />,
    errorElement: <RootErrorBoundary />

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <>
    <RouterProvider router={router} />
    {/* <AlterantePagination /> */}
  </>
  // <>
  //   <LanguageContext>
  //     <ContextHoc>
  //       <Theme />

  //     </ContextHoc>
  //   </LanguageContext>
  //   <ParentRef />
  // </>
);
