"use server";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/utils/getProducts";
import getProductsById from "@/utils/getProductsById";
import Image from "next/image";
import ProductBookingForm from "./ProductBookingForm";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product | null = await getProductsById(id);

  // Handle the case where product is null
  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  // Destructure properties from product
  const { image, productName, details, price } = product;

  return (
    <section className="grid grid-cols-2">
      <div>
        <Card>
          <CardHeader>
            {image ? (
              <Image
                src={image}
                width={400}
                height={400}
                alt={productName}
                className="w-full h-auto rounded-t-lg"
              />
            ) : (
              <div className="bg-gray-200 w-full h-96 rounded-t-lg flex items-center justify-center">
                <span>No image available</span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold">{productName}</h2>
            <p className="text-sm text-gray-500">{details}</p>
            <p className="text-lg font-semibold mt-2">${price}</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <ProductBookingForm />
      </div>
    </section>
  );
};

export default ProductDetails;
