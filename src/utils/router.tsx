import { RootRoute, Route, Router } from "@tanstack/router";
import App from "@/App";
import ErrorView from "@views/ErrorView";
import Home from "@views/Home";
import AnotherViewComponent from "@views/AnotherView";

/*
 * Steps to add routes
 *
 * 1. Import component
 * 2. Add new route to the "other route" section, following the existing examples
 * 3. Add this new route to the route tree
 * 4. (If applicable) Add new route to header in @components/header.tsx
 *
 * Documentation: https://tanstack.com/router/v1/docs/guide/routes
 */

interface RouterContext {
  dsid: number;
  title?: string;
}

// Root Route
const rootRoute = RootRoute.withRouterContext<RouterContext>()({
  component: App,
});

// Other routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  getContext: () => {
    return {
      title: "Home",
    };
  },
});

const anotherRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "anotherpage",
  component: AnotherViewComponent,
  getContext: () => {
    return {
      title: "Another Page",
    };
  },
});

const anotherRoute2 = new Route({
  getParentRoute: () => anotherRoute,
  path: "nestedpage",
  component: AnotherViewComponent,
  getContext: () => {
    return {
      title: "Another Page 2",
    };
  },
});

const error404Route = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: ErrorView,
  getContext: () => {
    return {
      title: "404",
    };
  },
});

// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  error404Route,
  anotherRoute.addChildren([anotherRoute2]),
]);

// Create the router
export const router = new Router({ routeTree, context: { dsid: 1234 } });

// Registering route types. Ensures type safety.
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
