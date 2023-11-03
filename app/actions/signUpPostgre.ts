"use server";
import prisma from "@/db";
import { validateEmail } from "./util";

export async function signUpPrisma(email: string) {
  if (!email || !validateEmail(email)) throw new Error("Email is required");

  try {
    // insert email in Subscription table
    const subscription = await prisma.subscription.create({
      data: {
        email,
      },
    });

    return subscription;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error signing up, possible duplicate email",
    };
  }
}
