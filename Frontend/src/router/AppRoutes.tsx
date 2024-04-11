import { createBrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage, ProductDetailPage, ProductPage } from "../pages";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/products/",
      element: <ProductPage />,
   },
   {
      path: "/products/:productId/details",
      element: <ProductDetailPage />,
   },
   {
      path: "*",
      element: <NotFoundPage />,
   },
]);
