import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const GoogleLogin = () => {
  return (
    <div>
      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <Button>
        <Image
          src="/assets/auth/google.svg"
          width={30}
          height={30}
          priority
          alt="Login with google tabseershop bd"
        />
        Google Login
      </Button>
    </div>
  );
};

export default GoogleLogin;
