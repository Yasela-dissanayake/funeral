import "./App.css";
import BaseLayout from "./components/BaseLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Obituaries from "./pages/Obituaries";
import FeedLayout from "./components/FeedLayout";
import TitleContextProvider from "./context/TitleContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/plan-ahead",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/bereavement-support",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/law-advice",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/funeral-wishes",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/funeral-directors",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/obituaries",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Obituaries />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <TitleContextProvider>
        <RouterProvider router={router} />
      </TitleContextProvider>
    </div>
  );
}

export default App;
