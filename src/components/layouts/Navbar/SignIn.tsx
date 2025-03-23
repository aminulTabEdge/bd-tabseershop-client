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
import { User, X } from "lucide-react";
import Image from "next/image";
import GoogleLogin from "@/components/auth/GoogleLogin";

const SignIn = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-white">
              <User size={30} />
              <span className="hidden lg:block">Sign In / Signup</span>
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              {/* Centered Logo */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/logo_circle.svg"
                  alt="logo circle"
                  height={80}
                  width={80}
                />
              </div>

              {/* Title */}
              <AlertDialogTitle className="text-center mt-8">
                Sign in to get the best online experience
              </AlertDialogTitle>
            </AlertDialogHeader>

            {/* Description and Input Section */}
            <div className="space-y-4 ">
              <AlertDialogDescription></AlertDialogDescription>

              <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
                {/* Country Flag */}
                <div className="flex items-center px-3 border-r bg-gray-100">
                  <Image
                    src="/assets/logos/bg-flag.svg"
                    alt="Bangladesh Flag"
                    width={24}
                    height={16}
                    className="w-6 h-auto"
                  />
                  <span className="ml-2 text-gray-700">+880</span>
                </div>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  placeholder="1XXXXXXXXX"
                  className="w-full p-3 focus:outline-none"
                />
              </div>

              {/* Login Button */}
              <Button>Login</Button>
              <p className="text-center">or, sign in with</p>
              <GoogleLogin />
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

export default SignIn;
