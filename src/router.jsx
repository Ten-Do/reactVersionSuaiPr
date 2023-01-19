import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";
import { Login } from "./components/pages/LogReg/login";
import { Registration } from "./components/pages/LogReg/registration";
//TODO import { ErrorPage } from "./components/pages/error-page";
//TODO import { NotFoundPage } from "./components/pages/not-found-page";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        index: true,
        element: <>HomeComponent</>,
      },
      {
        path: '/anyPath',
        element: <>component</>,
      },
      {
        path: "*",
        element: <>NotFoundPage</>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Registration />
  }
]);
