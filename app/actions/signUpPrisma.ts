"use server";
import prisma from "@/db";
import { validateEmail } from "./util";

export async function signUpPrisma(email: string) {
  if (!email || !validateEmail(email))
    return {
      error: true,
      message: "Please enter a valid email",
    };

  return {
    error: true,
    message: "Please enter a valid email",
  };

  // insert email in Subscription table
  const subscription = await prisma.subscription.create({
    data: {
      email,
    },
  });

  return subscription;
}
