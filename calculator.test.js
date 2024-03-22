import Calculator from "./calculator.js";

let calc = new Calculator();

test("adds two numbers", () => {
  expect(calc.add(5, 3)).toBe(8);
});

test("subtracts two numbers", () => {
  expect(calc.subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(calc.multiply(5, 3)).toBe(15);
});

test("divides two numbers", () => {
  expect(calc.divide(15, 3)).toBe(5);
});
