"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input"; // Import ShadCN's Input component
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming ShadCN provides a select component for size selection

interface FormData {
  customerName: string;
  email: string;
  quantity: number;
  bookingDate: string;
  productSize: string; // For the product size field
}

const ProductBookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Product Booking
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <Controller
            name="customerName"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          />
          {errors.customerName && (
            <p className="text-red-500 text-sm">
              {errors.customerName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Quantity</label>
          <Controller
            name="quantity"
            control={control}
            rules={{ required: "Quantity is required", min: 1 }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="Enter quantity"
                min="1"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Booking Date</label>
          <Controller
            name="bookingDate"
            control={control}
            rules={{ required: "Booking date is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          />
          {errors.bookingDate && (
            <p className="text-red-500 text-sm">{errors.bookingDate.message}</p>
          )}
        </div>

        {/* Product Size */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Size</label>
          <Controller
            name="productSize"
            control={control}
            rules={{ required: "Product size is required" }}
            render={({ field: { onChange, value } }) => (
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md">
                  <SelectValue placeholder="Select product size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="S">Small</SelectItem>
                  <SelectItem value="M">Medium</SelectItem>
                  <SelectItem value="L">Large</SelectItem>
                  <SelectItem value="XL">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.productSize && (
            <p className="text-red-500 text-sm">{errors.productSize.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md mt-4"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default ProductBookingForm;
