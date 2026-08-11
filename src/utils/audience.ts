const AUDIENCE_ALIASES: Array<[RegExp, string]> = [
  [/(dai thao duong|tien dai thao duong|duong huyet|tieu duong)/i, "diabetes"],
  [/(tang huyet ap|cao huyet ap)/i, "hypertension"],
  [/(gout|acid uric)/i, "gout"],
  [/(ckd|benh than|than iga|loc mau|tang kali)/i, "kidney"],
  [/(gan nhiem mo)/i, "fatty-liver"],
  [/(giam can|beo phi|thua can)/i, "weight-loss"],
  [/(da day|trao nguoc|loet da day|ibs|day bung)/i, "stomach"],
  [/(tim mach|mach vanh|nhoi mau co tim|dat stent|suy tim|roi loan mo mau|mo mau)/i, "cardio"],
  [/(ho hap|copd|hen suyen|viem phe quan|viem mui di ung|viem xoang|ngung tho khi ngu)/i, "respiratory"],
  [/(nguoi cao tuoi|nguoi gia)/i, "elderly"],
  [/(tre em|tre nho|phu huynh tre)/i, "children"],
  [/(nguoi cham soc|cha me|phu huynh|gia dinh|caregiver)/i, "caregiver"],
  [/(thai ky|mang thai|pregnan)/i, "pregnancy"],
  [/(an chay|vegan)/i, "vegan"],
];

function stripVietnamese(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();
}

export function canonicalAudienceTag(value: string): string {
  const raw = value.trim();
  if (!raw) return raw;
  const normalized = stripVietnamese(raw);
  for (const [pattern, canonical] of AUDIENCE_ALIASES) {
    if (pattern.test(normalized)) return canonical;
  }
  return raw;
}

export function canonicalAudienceList(values?: string[]): string[] {
  if (!values?.length) return [];
  return [...new Set(values.map(canonicalAudienceTag).filter(Boolean))];
}
