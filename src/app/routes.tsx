import { Suspense } from "react";

import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import ArtikulsPage from "@/pages/ArtikulsPage";
import LoginPage from "@/pages/LoginPage";

// Root route layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-cyan-100">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/artikuls" className="[&.active]:font-bold">
          Артикули
        </Link>
        <Link to="/auth" className="[&.active]:font-bold">
          Авторизація
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools  />
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

const artikulsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/artikuls",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtikulsPage />
    </Suspense>
  ),
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
const routeTree = rootRoute.addChildren([indexRoute, artikulsRoute, authRoute]);

export const router = createRouter({ routeTree });

// Extend router types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
