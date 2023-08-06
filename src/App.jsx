import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },

      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "checkout",
        element: <PrivateRoute />,
        children: [{ index: true, element: <Checkout /> }],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
