import { sentenceCase } from "./strings";

export const usage = (resolution = 3): Record<string, number> =>
  Object.fromEntries(
    Object.entries(process.memoryUsage()).map(([k, v]) => [
      sentenceCase(k).concat(" / MB"),
      parseFloat((v / 1024 ** 2).toFixed(resolution)),
    ])
  );
