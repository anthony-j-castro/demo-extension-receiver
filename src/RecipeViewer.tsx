import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/router";

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

  return (
    <div>
      <h1>Recipe</h1>
      <Link to="/">Home</Link>
      {recipe ? (
        <textarea value={JSON.stringify(recipe)} readOnly />
      ) : (
        <div>Waiting for recipe…</div>
      )}
    </div>
  );
}
