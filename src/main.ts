import { Worker } from 'worker_threads';
import path from 'path';

export const mempoll = (interval = 1000, resolution = 3): Worker =>
  new Worker(path.join(__dirname, 'poll.js'), {
    workerData: { interval, resolution },
  });
