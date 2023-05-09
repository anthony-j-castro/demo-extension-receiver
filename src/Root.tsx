import React from "react";
import { Outlet } from "@tanstack/router";

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
