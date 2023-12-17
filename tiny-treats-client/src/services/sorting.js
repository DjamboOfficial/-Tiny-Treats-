// utils/sorting.js
export const sortProducts = (products, sortOrder) => {
  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });
  return sortedProducts;
};
