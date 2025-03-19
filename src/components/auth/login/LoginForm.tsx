"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import GoogleLogin from "../GoogleLogin";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-lg   p-6 rounded-lg  bg-white">
      <h1 className="text-4xl text-center font-bold py-6">Login </h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="mt-2 p-3 w-full border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="mt-2 p-3 w-full border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Log in
        </Button>
      </form>
      <p className="py-3 text-center">
        You have not an account? Please
        <Link
          href="/register"
          className="text-blue-500 hover:underline ml-2 font-semi"
        >
          Register
        </Link>
      </p>
      <GoogleLogin />
    </div>
  );
};

export default LoginForm;
