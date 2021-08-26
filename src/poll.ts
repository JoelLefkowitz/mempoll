import { usage } from './usage';
import { workerData } from 'worker_threads';

setInterval(
  () => console.table(usage(workerData.resolution)),
  workerData.interval
);
