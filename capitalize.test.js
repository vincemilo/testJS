import capitalize from "./capitalize.js";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("test")).toBe("Test");
});
