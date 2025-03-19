import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Container from "@/components/ui/Container";
import getWomenItems, { Product } from "@/utils/getProducts";

import Image from "next/image";
import Link from "next/link";

const MensItems = async () => {
  const products: Product[] = await getWomenItems({ menuName: "men" });

  console.log(products);
  return (
    <Container container="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product._id} className="shadow-lg rounded-lg">
            <CardHeader>
              <Image
                src={product.image}
                width={400}
                height={400}
                alt={product.productName}
                className="w-full h-auto rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold">{product.productName}</h2>
              <p className="text-sm text-gray-500">{product.details}</p>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Link href={`product-details/${product._id}`}>
                <Button className="w-full">Order</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MensItems;
