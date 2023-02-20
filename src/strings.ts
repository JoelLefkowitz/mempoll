export const sentenceCase = (str: string): string =>
  str.charAt(0).toUpperCase() +
  str
    .slice(1)
    .replace(/([A-Z]+)/gu, " $1")
    .replace(/([-_]+)/gu, " ")
    .toLowerCase();
