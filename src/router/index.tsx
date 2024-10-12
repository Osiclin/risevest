import Home from "pages/Home/Home";
import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <div>Something went wrong</div>,
    element: (
      <Outlet />
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Page Not Found!</div>,
  },
];

const router = createBrowserRouter(routes);

export { router };
