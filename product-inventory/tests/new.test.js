const productInventory = require("../product.js");

describe("calculateDiscount", function () {
  test("passing valid test data and checking calculateDiscount function", function () {
    const result = productInventory.calculateDiscount(100, 20);
    expect(result).toBe(80);
  });
  test("passing negative test data and checking calculateDiscount function", function () {
    const result = productInventory.calculateDiscount(100, -20);
    expect(result).toBe(null);
  });
  test("passing zero and checking calculateDiscount function", function () {
    const result = productInventory.calculateDiscount(100, 0);
    expect(result).toBe(null);
  });
});
