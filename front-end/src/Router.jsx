import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ErrorPage from "./components/ErrorPage"
import Game from "./components/Game"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game",
      element: <Game />,
    },
    // {
    //   path: "/blogs/:blogid",
    //   element: <Blog />,
    // },
  ])

  return <RouterProvider router={router} />
}

export default Router
