// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

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
      {
        name: "checkout",
        title: "Checkout page",
        component: Checkout,
        path: "/checkout",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
