import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect } from "react";

// import Home from "./pages/Home";
// import ErrorPage from "./pages/ErrorPage";

import Locums from "./pages/Locums";
// import CreateNew from "./pages/CreateNew";
const About = lazy(() => import("./pages/About"))
const Profile = lazy(() => import("./pages/Profile"))
const Registration = lazy(() => import("./pages/Registration"))
const Root = lazy(() => import("./pages/Root"))
const Login = lazy(() => import("./pages/Login"))
const RecoverPassword = lazy(() => import("./pages/RecoverPassword"))
const Home = lazy(() => import("./pages/Home"))
const CreateNew = lazy(() => import("./pages/CreateNewLocum"))
// const Locums = lazy(() => import("./pages/Locums"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))



interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function App(props: Props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root {...props} />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/locums",
          element: <Locums />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/locums/create-new",
              element: <CreateNew />,
              errorElement: <ErrorPage />,
            },
          ]
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/recover-password",
          element: <RecoverPassword />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: <Registration />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
