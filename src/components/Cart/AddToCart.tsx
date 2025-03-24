import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import CartDescription from "./CartDescription";

const AddToCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:cursor-pointer">
        <div className="relative">
          <Image
            src="/assets/logos/cart.svg"
            alt="Cart Icon of Tabseershop"
            width={85}
            height={40}
          />
          <p className="absolute top-7 left-1/2 transform -translate-x-1/2 text-white text-sm flex justify-center items-center gap-1">
            0 <span>items</span>
          </p>
          <p className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white text-sm flex justify-center items-center">
            <Image
              src="/assets/logos/bdt-white.svg"
              width={20}
              height={20}
              alt="BDT icon for tabseershop"
            />
            0
          </p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart /> 0 items
          </SheetTitle>

         
          <CartDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddToCart;
