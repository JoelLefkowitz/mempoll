import { usage } from "./usage";

describe("usage", () => {
  it("retrieves a formatted memory profile.", () => {
    const keys = Object.keys(usage());

    [
      "Array buffers / MB",
      "External / MB",
      "Heap total / MB",
      "Heap used / MB",
      "Rss / MB",
    ].map((key) => expect(keys).toContain(key));
  });
});
