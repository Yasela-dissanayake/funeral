import "./App.css";
import BaseLayout from "./components/BaseLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TitleContextProvider from "./context/TitleContext";

import Home from "./pages/Home";
import Obituaries from "./pages/Obituaries";
import PlanAhead from "./pages/PlanAhead";
import Bereavement from "./pages/Bereavement";
import LawAdvice from "./pages/LawAdvice";
import FuneralWishes from "./pages/FuneralWishes";
import FuneralDirectors from "./pages/FuneralDirectors";

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
        element: <PlanAhead />,
      },
    ],
  },
  {
    path: "/bereavement-support",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Bereavement />,
      },
    ],
  },
  {
    path: "/law-advice",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <LawAdvice />,
      },
    ],
  },
  {
    path: "/funeral-wishes",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FuneralWishes />,
      },
    ],
  },
  {
    path: "/funeral-directors",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FuneralDirectors />,
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
