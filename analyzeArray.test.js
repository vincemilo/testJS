import analyzeArray from "./analyzeArray.js";

test("takes an array of numbers and returns an object with the average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});
