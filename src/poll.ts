import { usage } from "./usage";
import { workerData } from "worker_threads";

const { resolution, interval } = workerData as {
  resolution: number;
  interval: number;
};

setInterval(() => {
  console.table(usage(resolution));
}, interval);
