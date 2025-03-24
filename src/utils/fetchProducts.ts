import { IProduct } from "@/types/IProduct";

export type TQueriesProduct = {
  category: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
};

const fetchProducts = async ({
  category,
  minPrice,
  maxPrice,
  page,
  limit,
}: TQueriesProduct): Promise<{ data: IProduct[] } | null> => {
  try {
    // Construct query parameters dynamically, removing undefined values
    const queryParams = new URLSearchParams({
      category: category.toLowerCase(),
      ...(minPrice !== undefined && { minPrice: minPrice.toString() }),
      ...(maxPrice !== undefined && { maxPrice: maxPrice.toString() }),
      ...(page !== undefined && { page: page.toString() }),
      ...(limit !== undefined && { limit: limit.toString() }),
      sortOrder: "desc",
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product?${queryParams}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const data = await res.json();
    return data?.data ? data : null; // Ensure it returns only `data` if it exists
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // Return null if an error occurs
  }
};

export default fetchProducts;
