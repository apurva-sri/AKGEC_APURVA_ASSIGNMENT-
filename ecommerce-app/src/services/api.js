const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products?limit=194`);

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  const data = await response.json();

  return data;
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }

  const data = await response.json();

  return data;

  // return await response.json();
}