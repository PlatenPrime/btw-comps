import React, { Suspense } from "react";

import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, Link } from "@tanstack/react-router";


const LoginPage = React.lazy(() =>
  import("../pages/LoginPage").then((module) => ({ default: module.LoginPage }))
);

// Root route layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/auth" className="[&.active]:font-bold">
          Auth
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// Child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  ),
});

// Create route tree and router
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, authRoute]);

export const router = createRouter({ routeTree });

// Extend router types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
