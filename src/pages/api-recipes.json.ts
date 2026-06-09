import { recipes } from "../data/nutrition";
import { calculateRecipe } from "../lib/nutrition";

export async function GET() {
  const items = recipes.map(r => ({
    id: r.id, slug: r.slug, name: r.name, aliases: r.aliases,
    servingName: r.servingName, servingWeightG: r.servingWeightG,
    tags: r.tags, portionNote: r.portionNote,
    nutrients: Object.fromEntries(Object.entries(calculateRecipe(r)).filter(([_, v]) => v !== undefined)),
    ingredients: r.items.map(i => ({ foodId: i.foodId, amountG: i.amountG, note: i.note })),
    source: r.sourceId, confidence: r.confidence, note: r.note,
  }));
  return new Response(JSON.stringify(items, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
