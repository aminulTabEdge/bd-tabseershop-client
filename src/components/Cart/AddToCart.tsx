import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const AddToCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:cursor-pointer">
        <Image
          src="/assets/logos/cart.svg"
          alt="Cart Icon of Tabseershop"
          width={80}
          height={40}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddToCart;
