import caeserCipher from "./caeserCipher.js";

test("shifts each character by a provided shift factor", () => {
  expect(caeserCipher("The quick brown fox jumps over the lazy dog.", 2)).toBe(
    "Vjg swkem dtqyp hqz lworu qxgt vjg ncba fqi."
  );
});
