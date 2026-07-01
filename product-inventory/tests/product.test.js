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

describe("working on filtered products function", function () {
  test("passing valid test data and checking filterProducts function", function () {
    const result = productInventory.filterProducts(
      productInventory.products,
      (item) => item.price > 30,
    );
    expect(result).toEqual([
      { product: "shoes", price: 120 },
      { product: "chair", price: 79 },
    ]);
  });
  test("passing negative test data and checking filterProducts function", function () {
    const result = productInventory.filterProducts(
      productInventory.products,
      (item) => item.product === "apple",
    );
    expect(result).toEqual([]);
  });
  test("passing zero and checking filterProducts function", function () {
    const result = productInventory.filterProducts(
      [],
      (item) => item.product === "apple",
    );
    expect(result).toEqual([]);
  });
});

describe("working on sortInventory function", function () {
  test("passing valid test data and checking sortInventory function", function () {
    const result = productInventory.sortInventory(
      productInventory.inventory,
      "price",
    );
    expect(result).toEqual([
      { product: "watch", price: 30 },
      { product: "chair", price: 79 },
      { product: "shoes", price: 120 },
    ]);
  });
  test("passing negative test data and checking sortInventory function", function () {
    const result = productInventory.sortInventory(
      productInventory.inventory,
      21,
    );
    expect(result).toEqual([]);
  });
  test("passing zero and checking sortInventory function", function () {
    const result = productInventory.sortInventory([], "product");
    expect(result).toEqual([]);
  });
});
