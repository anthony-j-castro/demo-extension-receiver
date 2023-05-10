import React, { useEffect } from "react";

export default function RecipeViewer() {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      // We only accept messages from ourselves
      if (event.source !== window) {
        return;
      }

      console.log("received message:", event.data);
    };

    window.addEventListener("message", listener, false);

    return () => {
      console.log("removing event listener");
      window.removeEventListener("message", listener);
    };
  }, []);

  return <h1>Recipe</h1>;
}
