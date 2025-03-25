"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

const ProductOrder = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full ">Order</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              {/* Centered Logo */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/logos/logo-circle.svg"
                  alt="logo circle"
                  height={110}
                  width={110}
                />
              </div>

              {/* Title */}
              <AlertDialogTitle className="text-center mt-12">
                Give Your Information that you can order
              </AlertDialogTitle>
            </AlertDialogHeader>

            {/* Description and Input Section */}
            <div className="space-y-6 ">
              <AlertDialogDescription></AlertDialogDescription>

              <Input placeholder="Your Name" />
              <Input placeholder="Delivery Address" />
              <Input placeholder="Email" />
              <Input placeholder="Phone Number" />
              <Button className="w-full">Place Order </Button>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel className="w-12 text-[#133E87] absolute top-0 right-0 hover:text-white">
                <X />
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default ProductOrder;
