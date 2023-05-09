import React from "react";
import {
  Router,
  Route,
  RootRoute,
  createBrowserHistory,
} from "@tanstack/router";
import App from "./App";
import Root from "./Root";
import RecipeViewer from "./RecipeViewer";

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
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
const router = new Router({ history, routeTree });

export default router;
