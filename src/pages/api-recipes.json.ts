import { recipes } from "../data/nutrition";
import { calculateRecipe, recipePublicNote } from "../lib/nutrition";

export async function GET() {
  const items = recipes.map(r => {
    const nutrients = calculateRecipe(r);
    return {
      id: r.id, slug: r.slug, name: r.name, aliases: r.aliases,
      servingName: r.servingName, servingWeightG: r.servingWeightG,
      tags: r.tags, portionNote: r.portionNote,
      nutrients: Object.fromEntries(Object.entries(nutrients).filter(([_, v]) => v !== undefined)),
      ingredients: r.items.map(i => ({ foodId: i.foodId, amountG: i.amountG, note: i.note })),
      source: r.sourceId, confidence: r.confidence, note: recipePublicNote(r, nutrients),
    };
  });
  return new Response(JSON.stringify(items, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
