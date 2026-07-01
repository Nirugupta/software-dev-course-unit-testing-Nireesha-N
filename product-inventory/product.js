function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number")
    return null;
  if (discountRate <= 0) return null;
  else {
    let discountedPrice = price - (price * discountRate) / 100;
    return discountedPrice;
  }
}

function filterProducts(products, callback) {
  if (!Array.isArray(products) || typeof callback !== "function") return [];
  return products.filter(callback);
}

function sortInventory(inventory, key) {
  //   if (!Array.isArray(inventory) || typeof key !== "string") return [];
  //   return inventory.sort(key);
  if (!Array.isArray(inventory) || typeof key !== "string") return [];

  return [...inventory].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
}

const products = [
  { product: "watch", price: 30 },
  { product: "shoes", price: 120 },
  { product: "chair", price: 79 },
];

const inventory = [
  { product: "watch", price: 30 },
  { product: "shoes", price: 120 },
  { product: "chair", price: 79 },
];

// console.log(calculateDiscount(100, 20));
// console.log(filterProducts(products, (item) => item.price > 30));
// console.log(sortInventory(inventory, "product"));
// console.log(sortInventory(inventory, "price"));

module.exports = {
  calculateDiscount,
  filterProducts,
  sortInventory,
  products,
  inventory,
};
