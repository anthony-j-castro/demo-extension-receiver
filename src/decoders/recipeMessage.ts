import { object, constant, inexact } from "decoders";

const recipeMessageDecoder = object({
  type: constant("RECIPE_JSON"),
  data: inexact({}),
});

export default recipeMessageDecoder;
