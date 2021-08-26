import { comprehension, sentenceCase } from './utils';

export type MemoryUsage = {
  [K in keyof NodeJS.MemoryUsage]: NodeJS.MemoryUsage[K];
};

export const usage = (resolution = 3): Record<string, number> =>
  comprehension(
    process.memoryUsage() as MemoryUsage,
    ([k, v]: [string, number]) => [
      sentenceCase(k).concat(' / MB'),
      parseFloat((v / 1024 ** 2).toFixed(resolution)),
    ]
  );
