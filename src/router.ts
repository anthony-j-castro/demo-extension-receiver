import {
  Router,
  Route,
  RootRoute,
  createBrowserHistory,
} from "@tanstack/router";
import Home from "./components/Home";
import App from "./components/App";
import RecipeViewer from "./components/RecipeViewer";

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
