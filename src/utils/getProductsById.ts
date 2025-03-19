import { Product } from "./getProducts";

const getProductsById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export default getProductsById;
