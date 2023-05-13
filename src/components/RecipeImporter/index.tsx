import React, { useEffect, useState } from "react";
import { LoadingMessage, RecipeData } from "./styled";
import recipeMessageDecoder from "../../decoders/recipeMessage";

export default function RecipeImporter() {
  const [recipe, setRecipe] = useState<Record<string, unknown> | undefined>(
    undefined
  );

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      // We only accept messages from ourselves
      if (event.source !== window) {
        return;
      }

      const message = recipeMessageDecoder.value(event.data);

      if (message !== undefined) {
        setRecipe(message.data);
      }
    };

    window.addEventListener("message", listener, false);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return recipe ? (
    <RecipeData value={JSON.stringify(recipe, null, 2)} readOnly />
  ) : (
    <LoadingMessage>Waiting to receive recipe data…</LoadingMessage>
  );
}
