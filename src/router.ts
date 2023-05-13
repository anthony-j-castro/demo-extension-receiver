import {
  Router,
  Route,
  RootRoute,
  createBrowserHistory,
} from "@tanstack/router";
import Home from "./Home";
import App from "./App";
import RecipeViewer from "./RecipeViewer";

// Create a root route
const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const recipeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/recipe",
  component: RecipeViewer,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, recipeRoute]);

const history = createBrowserHistory();

// Create the router using your route tree
const router = new Router({
  basepath: "/demo-extension-receiver",
  history,
  routeTree,
});

export default router;
