import React, { useEffect, useState } from "react";
import { LoadingMessage, RecipeData } from "./styled";

export default function RecipeViewer() {
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      // We only accept messages from ourselves
      if (event.source !== window) {
        return;
      }

      console.log("received message:", event.data);

      if (event.data.type === "RECIPE_JSON") {
        setRecipe(event.data.data);
      }
    };

    window.addEventListener("message", listener, false);

    return () => {
      console.log("removing event listener");
      window.removeEventListener("message", listener);
    };
  }, []);

  return recipe ? (
    <RecipeData value={JSON.stringify(recipe)} readOnly />
  ) : (
    <LoadingMessage>Waiting to receive recipe data…</LoadingMessage>
  );
}
