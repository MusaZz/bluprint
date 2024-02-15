// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Shop from "../pages/Products";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";

// Generate Routes
import { renderRoutes } from "./generate-routes";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: Register,
        path: "/register",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: Home,
        path: "/",
        isPublic: true,
      },
      {
        name: "shop",
        title: "Shop page",
        component: Shop,
        path: "/shop",
        isPublic: true,
      },
      {
        name: "product",
        title: "Product page",
        component: Product,
        path: "/product/:id",
        isPublic: true,
      },
      {
        name: "cart",
        title: "Cart page",
        component: Cart,
        path: "/cart",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
