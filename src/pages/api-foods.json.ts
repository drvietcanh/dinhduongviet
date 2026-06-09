import { foods } from "../data/nutrition";
import { computeNutrientTags } from "../lib/nutrition";

export async function GET() {
  const items = foods.map(f => ({
    id: f.id, slug: f.slug, name: f.name, aliases: f.aliases,
    category: f.category, state: f.state, basis: f.basis,
    edibleNote: f.edibleNote,
    nutrients: Object.fromEntries(Object.entries(f.nutrients).filter(([_, v]) => v !== undefined)),
    tags: computeNutrientTags(f.nutrients),
    source: f.sourceId, confidence: f.confidence, note: f.note,
    dataQuality: f.dataQuality,
    sourceConfidence: f.sourceConfidence,
    sourceReviewStatus: f.sourceReviewStatus,
    basisNote: f.basisNote,
    reviewNote: f.reviewNote,
    candidateSource: f.candidateSource,
    needsExternalSource: f.needsExternalSource,
    needsDietitianReview: f.needsDietitianReview,
  }));
  return new Response(JSON.stringify(items, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
