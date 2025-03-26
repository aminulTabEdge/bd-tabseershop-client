"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { User, X } from "lucide-react";
import Image from "next/image";
import GoogleLogin from "@/components/auth/GoogleLogin";
import { getUser } from "@/utils/userInfo";
import { useEffect, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [user, setUser] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData || null);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSignUp = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/signup`;
    const body = user?.email
      ? { name: user.name, email: user.email, image: user.image }
      : { phone };

    try {
      const { data } = await axios.post(apiUrl, body, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Signup response:", data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

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
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/logos/logo-circle.svg"
                  alt="logo circle"
                  height={110}
                  width={110}
                />
              </div>
              <AlertDialogTitle className="text-center mt-12">
                Sign in to get the best online experience
              </AlertDialogTitle>
            </AlertDialogHeader>

            <div className="space-y-4">
              <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
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
                <input
                  type="tel"
                  placeholder="1XXXXXXXXX"
                  className="w-full p-3 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <Button className="w-full" onClick={handleSignUp}>
                Login
              </Button>
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
