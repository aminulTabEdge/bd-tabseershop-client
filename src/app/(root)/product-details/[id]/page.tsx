import fetchProductById from "@/utils/fetchProductById";
import { IProduct } from "@/types/IProduct";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import NoProductFound from "@/components/common/NoProductFound";
import SimilarProduct from "@/components/products/SimilarProduct";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  console.log("Fetching product for ID:", id);

  const product: IProduct | null = await fetchProductById(id);

  if (!product) {
    return <NoProductFound />;
  }
  const {  name, description, price, images, category } = product;
  console.log("Product fetched:", product);

  return (
    <Container container="container">
      <div className="flex gap-4 justify-between items-center">
        <div>
          {images?.length > 0 && (
            <Image
              src={images[0]}
              alt={name}
              width={500}
              height={500}
              className=" object-cover mt-4"
            />
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-600">{description}</p>
          <p className="text-lg font-semibold">Price: ${price}</p>
          <Button className="mt-auto flex items-center gap-2 w-40">
            <ShoppingCart /> Add to cart
          </Button>
        </div>
        <div>
          <Image
            src={"/assets/demo.PNG"}
            alt={name}
            width={500}
            height={500}
            className=" mt-4"
          />
        </div>
      </div>
      {/* Similar Product */}
      <SimilarProduct category={category} />
    </Container>
  );
};

export default ProductDetails;
