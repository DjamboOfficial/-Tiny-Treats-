export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/catalogue/api/products"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: `, error);
    throw error;
  }
};
