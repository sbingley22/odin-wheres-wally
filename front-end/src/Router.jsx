import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom"
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
      path: "/game/:id",
      element: <GameWrapper />,
    },
  ])

  return <RouterProvider router={router} />
}

const GameWrapper = () => {
  const { id } = useParams();
  return <Game level={id} />;
};

export default Router
