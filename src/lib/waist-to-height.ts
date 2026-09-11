export type WaistToHeightResult = {
  ok: boolean;
  error?: string;
  ratio?: number;
  formula?: string;
  interpretation: string;
};

const HEIGHT_MIN_CM = 100;
const HEIGHT_MAX_CM = 250;
const WAIST_MIN_CM = 30;
const WAIST_MAX_CM = 250;

function isValidNumber(value: number, min: number, max: number): boolean {
  return Number.isFinite(value) && value >= min && value <= max;
}

/**
 * Calculates waist-to-height ratio (WHtR). It is a circumference-based
 * screening reference and deliberately does not estimate body-fat percentage.
 */
export function calculateWaistToHeightRatio(waistCm: number, heightCm: number): WaistToHeightResult {
  if (!isValidNumber(heightCm, HEIGHT_MIN_CM, HEIGHT_MAX_CM)) {
    return {
      ok: false,
      error: `Vui lòng nhập chiều cao từ ${HEIGHT_MIN_CM} đến ${HEIGHT_MAX_CM} cm.`,
      interpretation: "Không thể tính khi chiều cao chưa hợp lệ.",
    };
  }

  if (!isValidNumber(waistCm, WAIST_MIN_CM, WAIST_MAX_CM)) {
    return {
      ok: false,
      error: `Vui lòng nhập vòng eo từ ${WAIST_MIN_CM} đến ${WAIST_MAX_CM} cm.`,
      interpretation: "Không thể tính khi vòng eo chưa hợp lệ.",
    };
  }

  const ratio = Math.round((waistCm / heightCm) * 100) / 100;

  return {
    ok: true,
    ratio,
    formula: `${waistCm} ÷ ${heightCm} = ${ratio.toFixed(2)}`,
    interpretation:
      "Đây là chỉ số sàng lọc từ số đo vòng eo và chiều cao, không phải % mỡ cơ thể và không dùng để chẩn đoán.",
  };
}
