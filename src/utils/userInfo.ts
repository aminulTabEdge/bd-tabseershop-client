"use server";

import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const getUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
