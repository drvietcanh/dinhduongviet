import type { Food } from "../data/nutrition";

export type AvailableCarbohydrateFood = Pick<Food, "sourceId" | "nutrients">;

/**
 * Normalizes the catalog's carbohydrate field to available carbohydrate for
 * glycemic calculations. The source convention matters: the 2007 Vietnamese
 * Food Composition Table calculates glucid after subtracting fiber, while
 * USDA legacy carbohydrate-by-difference includes fiber. The current VDD
 * portal does not publish its carbohydrate basis, so its values are withheld.
 *
 * Unknown source conventions are deliberately not guessed.
 */
export function availableCarbohydratePer100g(food: AvailableCarbohydrateFood): number | null {
  const carbohydrate = food.nutrients.carbG;
  if (!Number.isFinite(carbohydrate) || carbohydrate < 0) return null;
  if (carbohydrate === 0) return 0;

  if (food.sourceId === "vn-fct-2007") {
    return carbohydrate;
  }

  if (food.sourceId.startsWith("usda-fdc-")) {
    const fiber = food.nutrients.fiberG;
    if (!Number.isFinite(fiber) || fiber < 0 || fiber > carbohydrate) return null;
    return Math.max(0, carbohydrate - fiber);
  }

  return null;
}
