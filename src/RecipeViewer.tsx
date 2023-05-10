import React, { useEffect } from "react";

export default function RecipeViewer() {
  useEffect(() => {
    const callback = (request: any, sender: any, sendResponse: any) => {
      console.log("onMessageExternal", request, sender, sendResponse);
    };

    chrome?.runtime.onMessageExternal.addListener(callback);

    return () => {
      chrome?.runtime.onMessageExternal.removeListener(callback);
    };
  }, []);

  return <h1>Recipe</h1>;
}
