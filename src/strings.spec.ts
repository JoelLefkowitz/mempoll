import { sentenceCase } from "./strings";

describe("sentenceCase", () => {
  it("converts a camel case string to sentence case.", () => {
    expect(sentenceCase("helloWorld")).toBe("Hello world");
  });

  it("converts a pascal case string to sentence case.", () => {
    expect(sentenceCase("HelloWorld")).toBe("Hello world");
  });

  it("converts a snake case string to sentence case.", () => {
    expect(sentenceCase("hello_world")).toBe("Hello world");
  });

  it("converts a kebab case string to sentence case.", () => {
    expect(sentenceCase("hello-world")).toBe("Hello world");
  });
});
