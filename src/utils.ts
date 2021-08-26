export const comprehension = <T, U>(
  obj: Record<string, T>,
  cb: ([i, j]: [string, T]) => [string, U]
): Record<string, U> => Object.fromEntries(Object.entries(obj).map(cb));

export const sentenceCase = (str: string): string =>
  str.charAt(0).toUpperCase() +
  str
    .slice(1)
    .replace(/([A-Z]+)/g, ' $1')
    .replace(/([-_]+)/g, ' ')
    .toLowerCase();
